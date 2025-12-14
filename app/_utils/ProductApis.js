const { default: axiosClient } = require("./axiosClient");

const getLatestProduct = () => {
  return axiosClient.get("/products?populate=*");
};

const getProductById = (documentId) =>
  axiosClient.get(`/products/${documentId}?populate=*`);

const getProductsByCategory = (category) =>
  axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProduct,
  getProductById,
  getProductsByCategory,
};
