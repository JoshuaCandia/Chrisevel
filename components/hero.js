import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { useTheme } from "next-themes";
import heroImgDark from "../public/img/logos/small_logo_white.png";
import heroImgLight from "../public/img/logos/small_logo_black.png";
import EnchufandoBrand from "./EnchufandoBrand";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Enchufando SA.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Enchufando, una empresa argentina fundada en 2006, líder en
              productos petroquímicos en Argentina. Calidad rigurosa, negocios
              superiores en gestión responsable.
            </p>

            <div className="flex flex-col items-center space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/productos"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-700 rounded-md "
              >
                Productos
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            {theme === "dark" ? (
              <Image
                src={heroImgDark}
                width="416"
                height="317"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            ) : (
              <Image
                src={heroImgLight}
                width="416"
                height="317"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
                placeholder="blur"
              />
            )}
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Con la confianza de <span className="text-green-600">2000+</span>{" "}
            clientes al rededor del país
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <EnchufandoBrand />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <EnchufandoBrand />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <EnchufandoBrand />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <EnchufandoBrand />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <EnchufandoBrand />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
