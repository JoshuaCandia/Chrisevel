import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CustomDropdown from "./CustomDropdown";

const Navbar = () => {
  const router = useRouter();
  const [isHome, setIsHome] = useState(router.pathname === "/");

  useEffect(() => {
    setIsHome(router.pathname === "/");
  }, [router.pathname]);

  const handleNavClick = (link) => {
    if (!isHome) {
      localStorage.setItem("targetSection", link);
      router.push("/");
    }
  };

  return (
    <Disclosure>
      {({ open }) => (
        <motion.div 
          className="w-full fixed top-0 z-50 transition-colors bg-[#f5f5f5] shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between lg:px-0">
            {/* Logo y Botón */}
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <motion.span 
                  className="flex items-center space-x-2 text-2xl font-medium text-red-500 dark:text-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="https://res.cloudinary.com/dj4h7zbih/image/upload/v1731588627/nb9wu1pk2k19gabguvmy.png"
                    alt="Chrisevel Logo"
                    width={100}
                    height={100}
                    className="w-36"
                    priority
                  />
                </motion.span>
              </Link>

              <div className="lg:hidden flex items-center">
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-black rounded-md focus:outline-none hover:bg-gray-200 transition-colors duration-200"
                >
                  <motion.svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                      />
                    )}
                  </motion.svg>
                </Disclosure.Button>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ScrollLink
                  to="inicio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleNavClick("inicio")}
                  className="text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                >
                  Inicio
                </ScrollLink>
              </motion.div>
              <CustomDropdown />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/servicios"
                  className="text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                >
                  Servicios
                </Link>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacto"
                className="hidden lg:block text-lg text-white bg-red-700 rounded-md px-6 py-2 hover:bg-red-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contactános
              </Link>
            </motion.div>
            {/* Navegación para pantallas pequeñas */}
            <AnimatePresence>
              {open && (
                <Disclosure.Panel className="lg:hidden">
                  <motion.ul 
                    className="flex flex-col items-start p-4 space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.li
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ScrollLink
                        to="inicio"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => handleNavClick("inicio")}
                        className="block text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                      >
                        Inicio
                      </ScrollLink>
                    </motion.li>
                    <motion.li
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href="/productos"
                        className="block text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                      >
                        Productos
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="/servicios"
                        className="block text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                      >
                        Servicios
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href="/contacto"
                        className="block text-lg text-black cursor-pointer hover:text-gray-800 transition-colors duration-200"
                      >
                        Contactános
                      </Link>
                    </motion.li>
                  </motion.ul>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      )}
    </Disclosure>
  );
};

export default Navbar;
