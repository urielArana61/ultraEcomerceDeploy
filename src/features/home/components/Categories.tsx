import { CategoryCard } from './cards/CategoryCard';

export const Categories = () => {
  return (<>
    <div className='flex flex-col gap-3 min-h-[400px] bg-amber-50 pt-10'>
      <div className='flex flex-col sm:flex-row w-full items-center justify-center gap-20'>
        <CategoryCard img='/images/MakeUp.jpg' title='Makeup'/>
        <CategoryCard img='/images/SkinCare.jpg' title='Skin Care' />
        <CategoryCard img='/images/HairCare.jpg' title='Hair Care'/>
      </div>
    </div>
  </>);
};