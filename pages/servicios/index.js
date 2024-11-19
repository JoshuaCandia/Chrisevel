import Footer from "../../components/footer.js";
import HeaderProducts from "../../components/HeaderProducts.js";

const ServicesPage = () => {
  return (
    <div>
      <HeaderProducts title="Servicios" type="services" />
      <section className="flex justify-center md:mt-10 px-10">
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Nuestros Servicios
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-lg font-semibold text-gray-700">
                🔥 Recarga de Matafuegos
              </span>
            </li>
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-lg font-semibold text-gray-700">
                📆 Renovación Anual de Matafuegos
              </span>
            </li>
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-lg font-semibold text-gray-700">
                🛢️ Recarga de Garrafas Drago
              </span>
            </li>
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-lg font-semibold text-gray-700">
                🛠️ Reparación de Sifones Drago
              </span>
            </li>
            <li className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-lg font-semibold text-gray-700">
                🚛 Retiro de Matafuegos
              </span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
