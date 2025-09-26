import React from "react";
import { motion } from "framer-motion";
import Container from "./container";

const SectionTitle = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
    <Container
      className={`flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {props.pretitle && (
          <motion.div 
            className="text-sm font-bold tracking-wider text-red-600 uppercase"
            variants={itemVariants}
          >
            {props.pretitle}
          </motion.div>
        )}

        {props.title && (
          <motion.h2 
            className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
            variants={itemVariants}
          >
            {props.title}
          </motion.h2>
        )}

        {props.children && (
          <motion.p 
            className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
            variants={itemVariants}
          >
            {props.children}
          </motion.p>
        )}
      </motion.div>
    </Container>
  );
};

export default SectionTitle;
