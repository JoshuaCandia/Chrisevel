const HeaderProducts = ({ title }) => {
  return (
    <div className="bg-white md:pl-32 xl:pl-48 2xl:pl-64 min-h-72 min-w-full flex justify-center md:justify-start items-center">
      <article className=" bg-red-700 p-8 w-full flex justify-center md:justify-start items-center">
        <h1 className="text-2xl  text-white font-bold uppercase">{title}</h1>
      </article>
    </div>
  );
};

export default HeaderProducts;
