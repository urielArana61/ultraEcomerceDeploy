interface props {
  img: string;
  title: string;
}

export const CategoryCard = ({ img, title }: props) => {
  return (
    <>
      <div className='flex flex-col gap-3 max-w-[300px] '>
        <img
          src={img}
          alt={title}
          className='hover:scale-105 transition-all duration-300'
        />

        <div className='text-lg font-bold'>{title}</div>
      </div>
    </>
  );
};
