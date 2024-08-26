import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Lato, Montserrat, Open_Sans, Roboto } from "next/font/google";
import ButtonGoTop from "../components/ButtonGoTop";
import Navbar from "../components/navbar";
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
  return (
    <Providers>
      <ThemeProvider defaultTheme="light" attribute="class">
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <Navbar />
        <main className="pt-20 ">
          <Component {...pageProps} />
        </main>
        <ButtonGoTop />
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp;
