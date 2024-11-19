import { useTheme } from "next-themes";
import Link from "next/link";
import Container from "./container";

import ChrisevelBrand from "./ChrisevelBrand";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="flex flex-col items-center md:block mt-4 mt:lg:0 max-w-2xl mb-8 md:ms-8">
            <ChrisevelBrand />

            <p className="py-5 text-xl text-center md:text-left leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 ">
              Chrisevel Matafuegos es una empresa fundada en 1977, dedicada a la
              venta y recarga de matafuegos y artículos de seguridad.
            </p>

            <div className="flex flex-col items-center space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/productos"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-700 rounded-md "
              >
                Productos
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end w-8/12 md:w-10/12 lg:w-full">
            <img
              src="https://res.cloudinary.com/dj4h7zbih/image/upload/v1732035608/f2rnyymaysvlqxmttr10.jpg"
              width="416"
              height="317"
              className="object-cover"
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
