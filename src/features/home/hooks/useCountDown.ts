import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountDown = (initialTime?: TimeLeft) => {
  const defaultTime: TimeLeft = {
    hours: 23,
    minutes: 59,
    seconds: 59
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTime || defaultTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = `${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`;

  return {
    timeLeft,
    formattedTime
  };
};