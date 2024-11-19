import Link from "next/link";
import Footer from "../../components/footer.js";
import HeaderProducts from "../../components/HeaderProducts";
import { setImage } from "../../utils/functions";

const ProductsPage = () => {
  return (
    <div>
      <HeaderProducts title="Productos" type="products" />
      <section className="flex justify-center md:mt-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <CardSectionProduct
            link="/matafuegos"
            title="Matafuegos"
            type="matafuegos"
          />
          <CardSectionProduct link="/sifones" title="Sifones" type="sifones" />

          <CardSectionProduct
            link="/carteleria"
            title="Cartelería y señalización"
            type="carteleria"
          />

          <CardSectionProduct
            link="/purificador"
            title="Purificador de agua"
            type="purificador"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;

const CardSectionProduct = ({ title, type, link }) => {
  return (
    <Link href={link}>
      <article
        style={{
          backgroundImage: setImage(type),
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px",
          height: "200px",
        }}
        className="hover:cursor-pointer d-flex py-20  bg-white ps-8"
      >
        <article className="bg-black flex justify-start items-center">
          <span className=" flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
            <img
              src="https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169725/logos/ksoswjkido8k6utacxtp.png"
              width="70"
              height="70"
              className="w-10"
            />
          </span>
          <h1 className=" text-2xl text-white text-center font-bold uppercase">
            {title}
          </h1>
        </article>
      </article>
    </Link>
  );
};
