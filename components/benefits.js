import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  
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
    hidden: { x: props.imgPos === "right" ? 50 : -50, opacity: 0 },
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
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <motion.div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src={data.image}
              alt={data.title}
              width={551}
              height={400}
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <motion.div className="flex flex-col w-full mt-4" variants={itemVariants}>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </motion.div>

            <motion.div className="w-full mt-5" variants={itemVariants}>
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon} index={index}>
                  {item.desc}
                </Benefit>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <motion.div 
        className="flex items-start mt-8 space-x-3"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: props.index * 0.1,
          ease: "easeOut"
        }}
        whileHover={{ x: 5 }}
      >
        <motion.div 
          className="flex items-center justify-center flex-shrink-0 mt-1 bg-red-500 rounded-md w-11 h-11"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-red-50",
          })}
        </motion.div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Benefits;
