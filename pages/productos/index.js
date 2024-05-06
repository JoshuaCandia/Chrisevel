import Card from "../../components/Card";

const ProductsPage = ({ products }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {products[0]?.map((product) => (
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
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  const urlServer = process.env.NEXT_PUBLIC_URL_SERVER;
  const urlServerProduction = process.env.NEXT_PUBLIC_URL_SERVER_PRODUCTION;

  try {
    const response = await fetch(`${urlServer}/api/products`);
    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {},
    };
  }
}
