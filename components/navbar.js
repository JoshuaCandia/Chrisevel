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
      {({ open, close }) => (
        <div className="w-full fixed top-0 z-50 transition-colors bg-[#f5f5f5] shadow-lg">
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:justify-between xl:px-0">
            {/* Logo */}
            <div className="flex flex-wrap items-center justify-between w-full xl:w-auto">
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

              <div className="xl:hidden flex items-center">
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-black rounded-md xl:hidden focus:text-red-500 focus:bg-red-100 focus:outline-none dark:text-black dark:focus:bg-trueGray-5hover0"
                >
                  <svg
                    className="w-6 h-6 fill-current"
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
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>
            </div>

            {/* Menu */}
            <div className="hidden text-center xl:flex xl:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
                <ScrollLink
                  onClick={() => handleNavClick("inicio")}
                  to="inicio"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md dark:text-black hover:text-gray-800 focus:text-red-500 focus:bg-red-100 focus:outline-none dark:focus:bg-white cursor-pointer"
                >
                  Inicio
                </ScrollLink>
                <CustomDropdown />

                <Link
                  to="productos"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  href="/servicios"
                  onClick={close}
                  className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md dark:text-black hover:text-gray-800 focus:text-gray-500 focus:bg-red-100 focus:outline-none dark:focus:bg-white cursor-pointered-100 cursor-pointer"
                >
                  Servicios
                </Link>
              </ul>
            </div>

            <div className="hidden mr-3 space-x-4 xl:flex nav__item">
              {/*  <ThemeChanger className="" /> */}

              <Link
                href="/contacto"
                className="font-sans px-6 py-2 text-white bg-red-700 rounded-md md:ml-5"
              >
                Contactános
              </Link>
            </div>
          </nav>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
