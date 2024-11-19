import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
        <div className="w-full fixed top-0 z-50 transition-colors bg-[#f5f5f5] shadow-lg">
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between lg:px-0">
            {/* Logo y Botón */}
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-red-500 dark:text-black">
                  <img
                    src="https://res.cloudinary.com/dj4h7zbih/image/upload/v1731588627/nb9wu1pk2k19gabguvmy.png"
                    alt="N"
                    width="100"
                    height="100"
                    className="w-36"
                  />
                </span>
              </Link>

              <div className="lg:hidden flex items-center">
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-black rounded-md focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
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
                  </svg>
                </Disclosure.Button>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center space-x-8">
              <ScrollLink
                to="inicio"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => handleNavClick("inicio")}
                className="text-lg text-black cursor-pointer hover:text-gray-800"
              >
                Inicio
              </ScrollLink>
              <CustomDropdown />
              <Link
                href="/servicios"
                className="text-lg text-black cursor-pointer hover:text-gray-800"
              >
                Servicios
              </Link>
            </div>
            <Link
              href="/contacto"
              className="hidden lg:block text-lg text-white bg-red-700 rounded-md px-6 py-2"
            >
              Contactános
            </Link>
            {/* Navegación para pantallas pequeñas */}
            <Disclosure.Panel className="lg:hidden">
              <ul className="flex flex-col items-start p-4 space-y-2">
                <ScrollLink
                  to="inicio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => handleNavClick("inicio")}
                  className="block text-lg text-black cursor-pointer hover:text-gray-800"
                >
                  Inicio
                </ScrollLink>
                <Link
                  href="/productos"
                  className="block text-lg text-black cursor-pointer hover:text-gray-800"
                >
                  Productos
                </Link>
                <Link
                  href="/servicios"
                  className="block text-lg text-black cursor-pointer hover:text-gray-800"
                >
                  Servicios
                </Link>
                <Link
                  href="/contacto"
                  className="block text-lg text-black cursor-pointer hover:text-gray-800"
                >
                  Contactános
                </Link>
              </ul>
            </Disclosure.Panel>
          </nav>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
