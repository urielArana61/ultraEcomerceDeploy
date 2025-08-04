import { Handbag, CircleUserRound, Search } from 'lucide-react';
import { useCountDown } from '../hooks/useCountDown';
export const Header = () => {
  const { formattedTime } = useCountDown();
  return (
    <>
      <div className='flex justify-between items-center min-h-[100px] bg-awhite border-b border-gray-300 bg-white sticky top-0 z-50'>
        <div className='flex items-center mx-10'>
          <img
            src='/images/Ulta_logo.png'
            alt='logo'
            className='max-h-[50px]'
          />
        </div>
        <div className='sm:block hidden bg-linear-65 from-purple-500 to-pink-500 text-white text-2xl font-bold px-4 py-2 rounded-md'>
          Todas las velas 2x1 {formattedTime}
        </div>
        <div className='flex items-center mx-10 gap-5'>
          <button>
            <Handbag size={30} />
          </button>
          <button>
            <CircleUserRound size={30} />
          </button>
          <button>
            <Search size={30} />
          </button>
        </div>
      </div>
    </>
  );
};
