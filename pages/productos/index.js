import HeaderProducts from "../../components/HeaderProducts";

const ProductsPage = () => {
  return (
    <div>
      <HeaderProducts />
    </div>
  );
};

export default ProductsPage;

{
}

/* export async function getServerSideProps() {
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
} */
