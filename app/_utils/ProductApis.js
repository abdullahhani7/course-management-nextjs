const { default: axiosClient } = require("./axiosClient");

const getLatestProduct = () => {
  return axiosClient.get("/products");
};

export default {
  getLatestProduct,
};
