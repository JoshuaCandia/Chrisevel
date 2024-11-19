// pages/contact.tsx
import React from "react";
import Footer from "../../components/footer";

const Contact = () => {
  return (
    <main className="lg:pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className=" py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Logo e Información */}
            <div className="bg-red-600 p-8 lg:w-1/3 flex flex-col items-center justify-center">
              <img
                src={
                  "https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169724/logos/fyuranu83qla1d6hlv5z.png"
                }
                width="216"
                height="217"
                className="object-cover"
                alt="Hero Illustration"
                loading="eager"
                style={{ filter: "invert(1)" }}
              />
              <h1 className="text-white text-4xl font-bold my-4">Chrisevel</h1>
              <p className="text-red-200 text-lg text-center">
                Es una empresa nacida en 1978, dedicada a la venta y recarga de
                matafuegos y productos de seguridad.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="p-8 lg:w-2/3">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Contáctanos
              </h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="mb-2 text-lg font-medium leading-6 dark:text-white">
                    Horario de atención
                  </h3>
                  <p>Lunes a Viernes: 09:00 - 13:00 y 15:00 - 18:00</p>
                  <p>Sábados: 09:00 - 13:00</p>
                  <p>Domingos y Feriados: Cerrado</p>
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-black">Teléfono</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-red-500 hover:underline text-lg"
                  >
                    11 3139 3596
                  </a>
                </div>

                {/* Correo electrónico */}
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-black">
                    Correo electrónico
                  </h3>
                  <a
                    href="mailto:chrisevelmatafuegos@yahoo.com.ar"
                    className="text-red-500 hover:underline text-lg"
                  >
                    chrisevelmatafuegos@yahoo.com.ar
                  </a>
                </div>
                <div className="space-y-2">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Nuestras direcciónes
                  </h3>
                  <a
                    href="https://www.google.com/maps/place/Washington+496,+General+Pacheco,+Buenos+Aires,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:underline"
                  >
                    <p className="text-red-600">
                      San Juan 915, General Pacheco
                    </p>
                  </a>
                  <p className="">Buenos Aires, Argentina</p>
                  <a
                    href="https://www.google.com/maps/dir//chrisevel+2/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x95bca501fedfd0b3:0x7fb2ce12e8f7472a?sa=X&ved=1t:3061&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-slate-400 hover:underline"
                  >
                    <p className="text-red-600">
                      Lisandro de la Torre 2424 , Troncos del talar
                    </p>
                  </a>
                  <p className="">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;

/* import React from "react";
import Footer from "../../components/footer";

const index = () => {
  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Contacto
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              ¿Tienes alguna pregunta o comentario? no dudes en contactarnos
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="text-base font-semibold uppercase tracking-wide text-text-red-600 dark:text-red-200">
                Chrisevel
              </p>
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Es una empresa nacida en el 2006, dedicada a la fabricación y
                comercialización de productos petroquímicos a través de
                rigurosos protocolos que llevan a una productividad eficiente
                generando negocios superiores dentro de un marco empresarial
                serio y responsable.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <a
                      href="https://www.google.com/maps/place/Washington+496,+General+Pacheco,+Buenos+Aires,+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-slate-400 hover:underline"
                    >
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Nuestra dirección
                      </h3>

                      <p className="text-red-600">
                        Washington 496, General Pacheco
                      </p>
                      <p className="">Buenos Aires, Argentina</p>
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Medios de contacto
                    </h3>
                    <a href="tel:+541131393596">
                      <p className="text-gray-600 dark:text-slate-400">
                        {
                          <span className="text-red-600">
                            +54 9 11 3139-3596
                          </span>
                        }
                      </p>
                    </a>
                    <a href="tel:+541124524501">
                      <p className="text-gray-600 dark:text-slate-400">
                        {
                          <span className="text-red-600">
                            +54 9 11 2452-4501
                          </span>
                        }
                      </p>
                    </a>
                    <a href="tel:+541156161163">
                      <p className="text-gray-600 dark:text-slate-400">
                        {
                          <span className="text-red-600">
                            +54 9 11 5616-1163
                          </span>
                        }
                      </p>
                    </a>
                    <a href="mailto:info@Chrisevel.com">
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail:
                        {
                          <span className="text-red-600">
                            info@Chrisevel.com
                          </span>
                        }
                      </p>
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-red-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Horario de atención
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lunes a Viernes: 08:00 - 13:00 y 14:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Sábados, Domingos y Feriados: Cerrado
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Envíanos un mensaje
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <input
                        type="text"
                        id="name"
                        autocomplete="given-name"
                        placeholder="Tu nombre"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autocomplete="email"
                        placeholder="Tu dirección de correo electrónico"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      for="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Escribe tu mensaje.."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-red-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default index;
 */
