import React from "react";

const ContactInfo = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contáctanos</h2>

      <div className="space-y-8">
        {/* Horarios de atención */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-black">
            Horario de atención
          </h3>
          <article>
            <p className="font-bold">General Pacheco</p>
            <p>Lunes a Viernes: 09:00 - 13:00, 15:00 - 18:00</p>
            <p>Sábados: 09:00 - 13:00</p>
            <p>Domingos: Cerrado</p>
          </article>
          <article>
            <p className="font-bold">Troncos del Talar</p>
            <p>Lunes a Viernes: 09:00 - 12:00, 14:00 - 17:00</p>
            <p>Sábados: 09:00 - 12:00</p>
            <p>Domingos: Cerrado</p>
          </article>
        </div>

        {/* Teléfonos */}
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-black">Teléfonos</h3>
          <p>
            General Pacheco:{" "}
            <a
              href="tel:+5491164305706"
              className="text-red-500 hover:underline"
            >
              11 6430 5706
            </a>
          </p>
          <p>
            Troncos del Talar:{" "}
            <a
              href="tel:+5491154785544"
              className="text-red-500 hover:underline"
            >
              11 5478 5544
            </a>
          </p>
        </div>

        {/* Correo electrónico */}
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-black">Correo electrónico</h3>
          <a
            href="mailto:chrisevelmatafuegos@yahoo.com.ar"
            className="text-red-500 hover:underline"
          >
            chrisevelmatafuegos@yahoo.com.ar
          </a>
        </div>

        {/* Direcciones */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">
            Nuestras direcciones
          </h3>
          <a
            href="https://www.google.com/maps/place/Washington+496,+General+Pacheco,+Buenos+Aires,+Argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            <p>San Juan 915, General Pacheco, Buenos Aires</p>
          </a>
          <a
            href="https://www.google.com/maps/dir//chrisevel+2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            <p>Lisandro de la Torre 2424, Troncos del Talar, Buenos Aires</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
