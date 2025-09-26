import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./container";

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container>
      <motion.div 
        className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-r from-red-700 to-red-800 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex-grow text-center lg:text-left"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-medium lg:text-3xl">
            ¿Necesitas una recarga urgente?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Llámanos y te asesoramos para que puedas resolver tu problema.
          </p>
        </motion.div>
        <motion.div 
          className="flex-shrink-0 w-full text-center lg:w-auto"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contacto"
              className="inline-block py-3 mx-auto text-lg font-medium text-center text-black bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactános
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Cta;
