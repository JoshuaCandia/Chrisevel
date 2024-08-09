export const setImage = (type) => {
  if (type === "riego") {
    return "url('https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169156/latest-products/jhvlqcku6lmydezkhbf0.jpg')";
  }
  if (type === "pvc") {
    return "url('/img/products-header-gray.jpg')";
  }
  if (type === "roscados") {
    return "url('https://res.cloudinary.com/djbeg0zrq/image/upload/v1723169155/latest-products/p4epqthf3uw4xkhlbi4q.jpg')";
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
