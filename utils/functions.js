export const setImage = (type) => {
  if (type === "riego") {
    return "url('/img/products-header-blue.jpg')";
  }
  if (type === "pvc") {
    return "url('/img/products-header-gray.jpg')";
  }
  if (type === "roscados") {
    return "url('/img/products-header-orange.jpg')";
  }
  if (type === "termofusion") {
    return "url('/img/products-header-green.jpg')";
  }
  if (type === "valvulas") {
    return "url('/img/products-header3.jpg')";
  }
  if (type === "products") {
    return "url('/img/products-header-white.jpg')";
  }
};
