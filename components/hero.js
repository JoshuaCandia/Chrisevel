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
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Container className="relative z-10 flex flex-wrap items-center min-h-screen py-20">
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

              <motion.div 
                className="py-6"
                variants={itemVariants}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Más de <span className="text-red-600">50 años</span> de experiencia en seguridad
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Chrisevel Matafuegos es una empresa fundada en 1977, dedicada a la
                  venta y recarga de matafuegos y artículos de seguridad. 
                  <span className="block mt-2 text-gray-700 font-medium">
                    Tu seguridad es nuestra prioridad.
                  </span>
                </p>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 items-center"
                variants={itemVariants}
              >
                <Link
                  href="/productos"
                  rel="noopener"
                  className="px-8 py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-red-600 to-red-700 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Productos
                </Link>
                <Link
                  href="/servicios"
                  rel="noopener"
                  className="px-8 py-4 text-lg font-semibold text-center text-red-600 bg-white border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Nuestros Servicios
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="mt-8 flex flex-wrap gap-6 items-center"
                variants={itemVariants}
              >
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Certificaciones oficiales</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Garantía extendida</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Servicio 24/7</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center lg:justify-end w-full lg:w-1/2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-400 to-red-500 rounded-3xl transform -rotate-1 opacity-30"></div>
                
                {/* Main Image */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dj4h7zbih/image/upload/v1732035608/f2rnyymaysvlqxmttr10.jpg"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                    alt="Chrisevel Matafuegos - Empresa de seguridad"
                    priority
                    quality={95}
                  />
                  
                  {/* Overlay with company info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Equipos Certificados</h3>
                      <p className="text-sm opacity-90">Matafuegos de última generación</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">★</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
