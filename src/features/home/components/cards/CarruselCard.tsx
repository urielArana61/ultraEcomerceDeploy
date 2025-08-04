import { CarouselItem } from '@/components/ui/carousel';
import type { Rating } from '../../interfaces/products.interface';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Gift, Tag } from 'lucide-react';
import { Alert } from '@/components/ui/alert';

interface props {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: Rating;
  gift: boolean;
  discount: boolean;
}

export const CarruselCard = ({
  id,
  title,
  price,
  category,
  image,
  rating,
  gift,
  discount,
}: props) => {
  return (
    <CarouselItem key={id} className='basis-1/1 md:basis-1/3 lg:basis-1/5'>
      <div className='p-1'>
        <Card className='h-[450px] flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none shadow-none'>
          <CardContent className='flex-1 flex flex-col'>
            <div className='flex flex-col h-full'>
              <div className='flex justify-center items-center mb-4 flex-shrink-0'>
                <img
                  src={image}
                  alt={title}
                  className='w-[150px] h-[150px] object-contain rounded-lg'
                />
              </div>
              <div className='flex-1 flex flex-col justify-between min-h-0'>
                <div className='space-y-2 flex-1'>
                  <h3 className='font-semibold text-sm line-clamp-2 leading-tight'>
                    {title}
                  </h3>
                  <p className='text-xs text-gray-600 capitalize'>{category}</p>
                  <div className='flex items-center gap-2 text-xs'>
                    <Star fill='black' color='black' size={12} />
                    <span className='font-medium'>{rating.rate}</span>
                    <span className='text-gray-500'>({rating.count})</span>
                  </div>
                  <div className='flex gap-3'>
                    <p className='text-lg font-semibold '>
                      ${price.toFixed(2)}
                    </p>
                    {discount && (
                        <div className='flex items-center gap-1'>
                            <span className='text-lg font-bold'>20% OFF</span>
                            <Tag size={16} />
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <div className='flex flex-col gap-3 w-full'>
              {gift && (
                <Alert
                  variant='default'
                  className='flex p-2 items-center justify-center gap-2 border-pink-600'
                >
                  <Gift color='#E60076'/>
                  <span className='text-pink-600'>Free Gift With Purchase</span>
                </Alert>
              )}
              <Button className='w-full bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200'>
                Add to cart
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </CarouselItem>
  );
};
