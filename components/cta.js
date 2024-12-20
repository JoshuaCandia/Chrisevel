import Link from "next/link";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-red-700 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            ¿Necesitas una recarga urgente?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Llámanos y te asesoramos para que puedas resolver tu problema.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/contacto"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-black bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Contactános
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
