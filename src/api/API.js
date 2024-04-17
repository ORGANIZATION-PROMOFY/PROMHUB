import axios from "axios";

const url = "192.168.1.18";

const apiClient = axios.create({
  baseURL: `http://${url}:5275/api/`,
});

export const getProduct = async () => {
  const response = await apiClient.get(
    "CombinedDataCompanyDistributorProductTables"
  );
  return response.data;
};

export const getCompany = async (id) => {
  const response = await apiClient.get(`Company/${id}`);
  return response.data;
};

export const getDistributor = async (id) => {
  const response = await apiClient.get(`Distributor/${id}`);
  return response.data;
};
