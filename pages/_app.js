import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
