import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./container";

import ChrisevelBrand from "./ChrisevelBrand";

const Hero = () => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Container className="flex flex-wrap">
        <motion.div 
          className="flex items-center w-full lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center md:block mt-4 mt:lg:0 max-w-2xl mb-8 md:ms-8">
            <motion.div variants={itemVariants}>
              <ChrisevelBrand />
            </motion.div>

            <motion.p 
              className="py-5 text-xl text-center md:text-left leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"
              variants={itemVariants}
            >
              Chrisevel Matafuegos es una empresa fundada en 1977, dedicada a la
              venta y recarga de matafuegos y artículos de seguridad.
            </motion.p>

            <motion.div 
              className="flex flex-col items-center space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row"
              variants={itemVariants}
            >
              <Link
                href="/productos"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-700 rounded-md hover:bg-red-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Productos
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center lg:justify-end w-full lg:w-1/2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center lg:justify-end w-8/12 md:w-10/12 lg:w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="https://res.cloudinary.com/dj4h7zbih/image/upload/v1732035608/f2rnyymaysvlqxmttr10.jpg"
                width={416}
                height={317}
                className="object-cover"
                alt="Chrisevel Matafuegos - Empresa de seguridad"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default Hero;
