import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer.js";
import HeaderProducts from "../../components/HeaderProducts";
import { setImage } from "../../utils/functions";
import { motion } from "framer-motion";
import { 
  FireIcon, 
  WrenchScrewdriverIcon, 
  MapIcon,
  SparklesIcon,
  PhoneIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const ProductsPage = () => {
  const products = [
    {
      icon: FireIcon,
      title: "Matafuegos",
      description: "Extintores de incendios de todos los tipos y capacidades. Garantizamos la máxima eficacia y seguridad.",
      features: ["Polvo químico", "CO2", "Agua", "Espuma"],
      color: "from-red-500 to-red-700",
      link: "/matafuegos",
      type: "matafuegos"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Sifones Drago",
      description: "Sifones de agua Drago de alta calidad para uso doméstico e industrial.",
      features: ["Sifones estándar", "Sifones industriales", "Repuestos", "Accesorios"],
      color: "from-blue-500 to-blue-700",
      link: "/sifones",
      type: "sifones"
    },
    {
      icon: MapIcon,
      title: "Cartelería y Señalización",
      description: "Señalización de seguridad y cartelería para cumplir con normativas de seguridad.",
      features: ["Señales de emergencia", "Planos de evacuación", "Carteles informativos", "Materiales resistentes"],
      color: "from-green-500 to-green-700",
      link: "/carteleria",
      type: "carteleria"
    },
    {
      icon: SparklesIcon,
      title: "Purificador de Agua",
      description: "Sistemas de purificación de agua para uso doméstico y comercial.",
      features: ["Filtros de carbono", "Purificación UV", "Sistemas completos", "Mantenimiento"],
      color: "from-purple-500 to-purple-700",
      link: "/purificador",
      type: "purificador"
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Nuestros Productos
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Productos de calidad premium para la seguridad y el bienestar de tu hogar y empresa
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRightIcon className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link href={product.link}>
                    <motion.button
                      className={`w-full bg-gradient-to-r ${product.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ver Productos
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-white"
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
              ¿Por qué elegir nuestros productos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Garantizamos la máxima calidad y seguridad en todos nuestros productos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Calidad Premium", 
                desc: "Productos de las mejores marcas del mercado",
                icon: "🏆"
              },
              { 
                title: "Garantía Total", 
                desc: "Garantía extendida en todos nuestros productos",
                icon: "🛡️"
              },
              { 
                title: "Asesoramiento", 
                desc: "Te ayudamos a elegir el producto ideal",
                icon: "💡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ¿Necesitas asesoramiento?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Nuestros expertos te ayudarán a elegir los productos perfectos para tus necesidades
          </motion.p>
          
          <motion.a
            href="/contacto"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            Contactar Ahora
          </motion.a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
