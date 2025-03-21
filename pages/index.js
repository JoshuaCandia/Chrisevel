import Head from "next/head";
import { useEffect } from "react";
import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import WhatsappButton from "../components/WhatsappButton";

const Home = () => {
  useEffect(() => {
    const targetSection = localStorage.getItem("targetSection");
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
        localStorage.removeItem("targetSection");
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Chrisevel</title>
        <meta
          name="description"
          content="Página oficial de Chrisevel, casa de matafuegos de zona norte"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="inicio">
        <Hero />
      </section>
      <section id="beneficios">
        <SectionTitle pretitle="" title=" Porque elegirnos">
          Trabajamos hace mas de 50 años ofreciendo el mejor servicio al mejor
          precio.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      <SectionTitle pretitle="FAQ" title="Preguntas Frecuentes">
        Si tienes alguna duda, revisa nuestras preguntas frecuentes. Si no
        encuentras la respuesta que buscas, no dudes en contactarnos.
      </SectionTitle>
      <section id="preguntas">
        <Faq />
      </section>
      <Cta />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Home;
