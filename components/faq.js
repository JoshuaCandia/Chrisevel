import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";

const Faq = () => {
  return (
    <Container id="faqs" className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <motion.div 
            key={item.question} 
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-red-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200 transition-colors duration-200 shadow-sm hover:shadow-md">
                      <span className="font-medium">{item.question}</span>
                      <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronUpIcon className="w-5 h-5 text-red-500" />
                      </motion.div>
                    </Disclosure.Button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel
                        as={motion.div}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div 
                          className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {item.answer}
                        </motion.div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "¿Cuentan con stock de productos?",
    answer: "Sí, contamos con stock de todos nuestros productos.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Nos encontramos en General pacheco y Troncos del talar, Provincia de Buenos Aires.",
  },
  {
    question: "¿Cuánto tiempo demora el envío?",
    answer:
      "Los envios demoran entre 24 a 48 horas, también es posible hacer el retiro en nuestro depósito.",
  },
  {
    question: "¿Puedo hablar con un representante de ventas?",
    answer:
      "Sí, puedes contactarnos por teléfono o por correo electrónico, y un representante de ventas te va a atender.",
  },
];

export default Faq;
