import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import { Providers } from "./providers";

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
