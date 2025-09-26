import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ name, image, sizes, type }) => {
  const [showSizes, setShowSizes] = useState(false);

  const handleMouseEnter = () => {
    setShowSizes(true);
  };

  const handleMouseLeave = () => {
    setShowSizes(false);
  };

  const toggleShowSizesMobile = () => {
    setShowSizes(!showSizes);
  };

  return (
    <motion.div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className="p-2 md:flex-shrink-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <Image
            src={image}
            width={300}
            height={350}
            alt={name}
            className="rounded-lg w-[248px] h-[248px] md:w-[300px] md:h-[350px] object-cover mx-auto"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <motion.div 
          className="bg-black text-center uppercase text-xxl text-white font-bold py-3"
          whileHover={{ backgroundColor: "#dc2626" }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {showSizes && (
          <motion.div 
            className="z-50 absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <table className="table-auto w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Tabla de tamaños</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((size, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="border px-4 py-2">{size}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
