import Footer from "../../components/footer.js";
import HeaderProducts from "../../components/HeaderProducts.js";
import { motion } from "framer-motion";
import {
  FireIcon,
  CalendarIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ServicesPage = () => {
  const services = [
    {
      icon: FireIcon,
      title: "Recarga de Matafuegos",
      description:
        "Servicio profesional de recarga para todos los tipos de matafuegos. Garantizamos la máxima eficacia y seguridad.",
      features: [
        "Recarga completa",
        "Pruebas de presión",
        "Certificación",
        "Garantía de 1 año",
      ],
      color: "from-red-500 to-red-700",
    },
    {
      icon: CalendarIcon,
      title: "Renovación Anual",
      description:
        "Mantenimiento preventivo anual para mantener tus matafuegos en perfecto estado de funcionamiento.",
      features: [
        "Inspección completa",
        "Limpieza profunda",
        "Reemplazo de piezas",
        "Certificado oficial",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Reparación de Sifones Drago",
      description:
        "Reparación especializada de sifones Drago con repuestos originales y técnicos certificados.",
      features: [
        "Diagnóstico gratuito",
        "Repuestos originales",
        "Garantía de reparación",
        "Servicio a domicilio",
      ],
      color: "from-green-500 to-green-700",
    },
    {
      icon: TruckIcon,
      title: "Retiro y Entrega",
      description:
        "Servicio de retiro y entrega a domicilio para tu comodidad. Cubrimos toda la zona norte.",
      features: [
        "Retiro programado",
        "Entrega puntual",
        "Cobertura zona norte",
        "Sin costo adicional",
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: ShieldCheckIcon,
      title: "Asesoramiento Técnico",
      description:
        "Consultoría especializada para elegir el equipo de seguridad más adecuado para tu empresa.",
      features: [
        "Evaluación gratuita",
        "Plan personalizado",
        "Cumplimiento normativo",
        "Seguimiento continuo",
      ],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: ClockIcon,
      title: "Servicio de Emergencia",
      description:
        "Servicio 24/7 para situaciones de emergencia. Disponibles cuando más nos necesites.",
      features: [
        "Disponibilidad 24/7",
        "Respuesta rápida",
        "Técnicos especializados",
        "Equipos de emergencia",
      ],
      color: "from-pink-500 to-pink-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
            Nuestros Servicios
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Más de 50 años brindando servicios especializados en seguridad
            contra incendios
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos un proceso estructurado para garantizar la máxima calidad
              en cada servicio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consulta",
                desc: "Evaluamos tus necesidades",
              },
              {
                step: "02",
                title: "Presupuesto",
                desc: "Cotización sin compromiso",
              },
              { step: "03", title: "Servicio", desc: "Ejecutamos el trabajo" },
              {
                step: "04",
                title: "Entrega",
                desc: "Certificación y garantía",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
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
            ¿Necesitas Nuestros Servicios?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Contáctanos para una consulta gratuita y recibe el mejor servicio
            del mercado
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contacto"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PhoneIcon className="w-5 h-5 inline mr-2" />
              Contactar Ahora
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
