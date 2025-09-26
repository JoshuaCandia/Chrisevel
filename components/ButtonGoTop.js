import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ButtonGoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Disclosure>
              <Disclosure.Button
                className="fixed z-40 flex items-center justify-center bg-red-600 rounded-full shadow-lg left-1 md:left-5 bottom-8 w-14 h-14 focus:outline-none hover:bg-red-700 focus:bg-red-700 transition-colors duration-300"
                onClick={scrollToTop}
                as={motion.button}
                whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  />
                </motion.svg>
              </Disclosure.Button>
            </Disclosure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonGoTop;
