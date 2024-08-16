import { setImage } from "../utils/functions";
const HeaderProducts = ({ title, type }) => {
  return (
    <div
      style={{
        backgroundImage: setImage(type),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-gray-500 md:pl-32 xl:pl-48 2xl:pl-64 min-h-96 min-w-full flex justify-center md:justify-start items-center"
    >
      <article className=" bg-black w-full flex justify-center md:justify-start items-center">
        <span className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
          <img
            src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
            width="70"
            height="70"
            className="w-10 md:w-16 lg:w-20"
          />
        </span>
        <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold uppercase">
          {title}
        </h1>
      </article>
    </div>
  );
};

export default HeaderProducts;
