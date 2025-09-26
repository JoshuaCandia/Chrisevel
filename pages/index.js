import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, benefitTwo } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import WhatsappButton from "../components/WhatsappButton";
import { 
  FireIcon, 
  WrenchScrewdriverIcon, 
  MapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  UserGroupIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

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

  const stats = [
    { number: "50+", label: "Años de experiencia", icon: TrophyIcon },
    { number: "1000+", label: "Clientes satisfechos", icon: UserGroupIcon },
    { number: "24/7", label: "Servicio de emergencia", icon: ClockIcon },
    { number: "100%", label: "Garantía de calidad", icon: ShieldCheckIcon }
  ];

  const products = [
    {
      icon: FireIcon,
      title: "Matafuegos",
      description: "Extintores de incendios de todos los tipos y capacidades",
      link: "/productos",
      color: "from-red-500 to-red-700"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Sifones Drago",
      description: "Sifones de agua de alta calidad para uso doméstico e industrial",
      link: "/productos",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: MapIcon,
      title: "Cartelería",
      description: "Señalización de seguridad y cartelería para cumplir normativas",
      link: "/productos",
      color: "from-green-500 to-green-700"
    },
    {
      icon: SparklesIcon,
      title: "Purificadores",
      description: "Sistemas de purificación de agua para hogar y comercio",
      link: "/productos",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>Chrisevel - Casa de Matafuegos Zona Norte</title>
        <meta
          name="description"
          content="Chrisevel: Más de 50 años brindando servicios especializados en matafuegos, sifones Drago, cartelería y purificadores de agua. Zona Norte, Buenos Aires."
        />
        <meta name="keywords" content="matafuegos, extintores, sifones drago, cartelería, purificadores, zona norte, buenos aires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="inicio">
        <Hero />
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Números que nos respaldan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más de medio siglo de experiencia y confianza de nuestros clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-red-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-300 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Preview Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Productos de calidad premium para la seguridad y el bienestar de tu hogar y empresa
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <div className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <Link href={product.link}>
                    <motion.button
                      className={`w-full bg-gradient-to-r ${product.color} text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ver Más
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href="/productos">
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Todos los Productos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section id="beneficios">
        <SectionTitle pretitle="" title="Por qué elegirnos">
          Trabajamos hace más de 50 años ofreciendo el mejor servicio al mejor
          precio.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                company: "Empresa ABC",
                text: "Excelente servicio y productos de primera calidad. Los recomiendo totalmente.",
                rating: 5
              },
              {
                name: "Carlos Rodríguez",
                company: "Comercio XYZ",
                text: "Más de 10 años trabajando con Chrisevel. Siempre cumplen con lo prometido.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                company: "Industria 123",
                text: "Servicio profesional y atención personalizada. Muy satisfecha con el resultado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
