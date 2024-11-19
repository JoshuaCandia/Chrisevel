import React from "react";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/footer";

const Contact = () => {
  return (
    <main className="lg:pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Logo e Información */}
            <div className="bg-red-600 p-8 lg:w-1/3 flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169724/logos/fyuranu83qla1d6hlv5z.png"
                width="216"
                height="217"
                alt="Logo"
                className="object-cover"
                loading="eager"
                style={{ filter: "invert(1)" }}
              />
              <h1 className="text-white text-4xl font-bold my-4">Chrisevel</h1>
              <p className="text-red-200 text-lg text-center">
                Empresa dedicada a la venta y recarga de matafuegos y productos
                de seguridad desde 1978.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="p-8 lg:w-2/3">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
