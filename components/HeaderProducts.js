import logoLight from "../public/img/logos/small_logo_black.png";
import logoDark from "../public/img/logos/small_logo_white.png";
import { useTheme } from "next-themes";
const HeaderProducts = ({ title }) => {
  const { theme } = useTheme();
  return (
    <div
      style={{}}
      className="bg-green-500 md:pl-32 xl:pl-48 2xl:pl-64 min-h-96 min-w-full flex justify-center md:justify-start items-center"
    >
      <span className="flex items-center space-x-2 text-2xl font-medium text-green-500 dark:text-gray-100">
        <img
          src={theme === "dark" ? logoDark.src : logoLight.src}
          alt="N"
          width="60"
          height="60"
          className="w-12"
        />
      </span>
      <h1 className="text-3xl text-white font-bold">{title}</h1>
    </div>
  );
};

export default HeaderProducts;
