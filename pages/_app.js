import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Navbar />
        <main className="pt-20">
          <Component {...pageProps} />
        </main>
        <PopupWidget />
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp;
