import { useCountDown } from '../hooks/useCountDown';

export const OfferAdvice = () => {
  const { formattedTime } = useCountDown();

  return (
    <div className='sm:hidden block bg-linear-65 from-purple-500 to-pink-500 text-white text-2xl font-bold px-4 py-2 text-center min-h-[50px]'>
      Todas las velas 2x1 {formattedTime}
    </div>
  );
};

export default OfferAdvice;
