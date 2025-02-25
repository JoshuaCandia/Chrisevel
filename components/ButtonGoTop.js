import { Disclosure } from "@headlessui/react";
import { useEffect, useState } from "react";

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
      <Disclosure>
        <Disclosure.Button
          className={`fixed z-40 flex items-center justify-center transition-opacity duration-300 bg-red-600 rounded-full shadow-lg left-1 md:left-5 bottom-8 w-14 h-14 focus:outline-none hover:bg-red-700 focus:bg-red-700 ease ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </Disclosure.Button>
      </Disclosure>
    </div>
  );
};

export default ButtonGoTop;
