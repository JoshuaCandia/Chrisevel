import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Lato, Montserrat, Open_Sans, Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import ButtonGoTop from "../components/ButtonGoTop";
import Navbar from "../components/navbar";
import PageLoader from "../components/PageLoader";
import "../css/tailwind.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Providers>
      <ThemeProvider defaultTheme="light" attribute="class">
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <PageLoader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Navbar />
            <main className="pt-20">
              <Component {...pageProps} />
            </main>
            <ButtonGoTop />
          </>
        )}
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp;
