import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Enchufando</title>
        <meta
          name="description"
          content="Página oficial de Enchufando, la mejor fábrica de conexiones plásticas de la región."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <SectionTitle
        pretitle="Beneficios de Enchufando"
        title=" Porque elegirnos"
      >
        Enchufando abre sus puertas en el año 2006, y desde entonces se ha
        convertido en la fábrica de conexiones plásticas líder en Argentina.
        Nuestros productos son de la más alta calidad, y nuestra gestión es
        responsable y sostenible.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Video de presentación"
        title="Video de los comienzos de Enchufando"
      >
        Mira nuestro video de presentación, y conoce más sobre nuestra historia.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonios"
        title="Escucha lo que dicen nuestros clientes"
      >
        Nuestros clientes son nuestra mejor publicidad, y sus testimonios son la
        mejor prueba de la calidad de nuestros productos y servicios.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Preguntas Frecuentes">
        Si tienes alguna duda, revisa nuestras preguntas frecuentes. Si no
        encuentras la respuesta que buscas, no dudes en contactarnos.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
