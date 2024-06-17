import Card from "../../components/Card";
import { products } from "../../data/products";
import Footer from "../../components/footer";
import HeaderProducts from "../../components/HeaderProducts";

const index = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderProducts title={"riego"} type="riego" />
      <section>
        <h2 className="md:px-16 text-2xl font-bold text-blue-600 text-start mt-8 mb-4">
          Todos los productos de riego
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-16 md:gap-4">
          {products
            ?.filter((product) => product.type === "ESPIGA")
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
