import { Button } from '@/components/ui/button';

export const HeroBanner = () => {
  return (
    <>
      <div
        className='flex flex-col items-center sm:items-start justify-center gap-3 min-h-[400px] bg-[url(/images/hero-banner.png)] 
                                sm:bg-[url(/images/hero-banner2.jpg)] bg-cover bg-center sm:px-10 md:px-20 lg:px-40 cursor-pointer'
        onClick={() => {
          window.open('https://www.google.com', '_blank');
        }}
      >
        <div className='text-2xl sm:text-4xl font-bold'>
          Flawless Beauty Starts Here
        </div>
        <div className='text-xl text-black text-center font-semibold px-20 sm:px-0'>
          Discover premium makeup essentials to elevate your everyday look.
        </div>
        <Button
          variant='default'
          className='bg-black text-white hover:bg-black/70'
        >
          Shop Now
        </Button>
      </div>
    </>
  );
};
