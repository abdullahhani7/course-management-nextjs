const { default: axiosClient } = require("./axiosClient");

const getLatestProduct = () => {
  return axiosClient.get("/products?populate=*");
};

const getProductById = (documentId) =>
  axiosClient.get(`/products/${documentId}?populate=*`);

export default {
  getLatestProduct,
  getProductById,
};
