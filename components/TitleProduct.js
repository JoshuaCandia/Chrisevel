const TitleProduct = ({ title }) => {
  return (
    <h2 className="md:px-16 text-2xl font-bold text-gray-700 text-start mt-8 mb-4">
      Todos los productos de{" "}
      <span className="font-bold text-black">{title}</span>
    </h2>
  );
};

export default TitleProduct;
