const { default: axiosClient } = require("./axiosClient");

const getLatestProduct = () => {
  return axiosClient.get("/products?populate=*");
};

export default {
  getLatestProduct,
};
