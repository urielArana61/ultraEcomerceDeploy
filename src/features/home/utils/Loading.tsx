import { LoaderPinwheel } from 'lucide-react';
export const Loading = () => {
  return (
    <div className='fixed inset-0 z-[9999] flex justify-center items-center bg-white/80'>
      <div className='flex gap-2'>
        <LoaderPinwheel size={50} className='animate-spin text-black'/>
        <LoaderPinwheel size={50} className='animate-spin text-black'/>
        <LoaderPinwheel size={50} className='animate-spin text-black'/>
      </div>
    </div>
  );
};
