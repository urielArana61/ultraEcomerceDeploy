import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import type { Product } from '../interfaces/products.interface';
import { Loading } from '../utils/Loading';
import { CarruselCard } from './cards/CarruselCard';

interface props {
  products: Product[] | undefined;
  isPending: boolean;
}

export const Carrusel = ({ products, isPending }: props) => {
  const indicesDescuento = [0, 2, 11, 6];
  const indicesRegalo = [1, 8];

  if (isPending) {
    return <Loading />
  }
  return (
    <>
      <div className='flex flex-col gap-3 min-h-[300px] bg-white py-5'>
        <div className='w-full px-5'>
          {products && <Carousel
            plugins={[
              Autoplay({
                delay: 1000000,
              }),
            ]}
          >
            <div className='flex flex-col mb-5'>
              <div className='text-md font-bold'>
                Your next fave is only at Ulta
              </div>
              <div className='text-sm text-gray-500'>12 items</div>
            </div>
            <CarouselContent>
              {products.slice(0, 12).map((product, index) => (
                <CarruselCard 
                  key={product.id} 
                  {...product} 
                  gift={indicesRegalo.includes(index)} 
                  discount={indicesDescuento.includes(index)} 
                />
              ))}
            </CarouselContent>
            <CarouselPrevious className='border-none bg-transparent shadow-none'/>
            <CarouselNext className='border-none bg-transparent shadow-none'/>
          </Carousel>}
        </div>
      </div>
    </>
  );
};
