import Card from "../../components/Card";
import { products } from "../../data/products";
import HeaderProducts from "../../components/HeaderProducts";
import Footer from "../../components/footer";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderProducts title={"VALVULAS Y CANILLAS"} type={"valvulas"} />
      <section>
        <h2 className="md:px-16 text-2xl font-bold text-blue-600 text-start mt-8 mb-4">
          Todos los productos de válvulas y canillas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-16 md:gap-4">
          {products
            ?.filter((product) => product.category === "Valvula")
            .map((product) => (
              <Card
                key={product.id}
                category={product.category}
                name={product.name}
                image={product.image?.secure_url}
                sizes={product.sizes}
                type={product.type}
              />
            ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
