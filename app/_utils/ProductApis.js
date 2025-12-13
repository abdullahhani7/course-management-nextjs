const { default: axiosClient } = require("./axiosClient");

const getLatestProduct = () => {
  axiosClient.get("/products");
};

export default {
  getLatestProduct,
};
