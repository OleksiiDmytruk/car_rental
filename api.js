import axios from "axios";

const instance = axios.create({
  baseURL: "https://652c55c4d0d1df5273ef5dd9.mockapi.io",
  headers: { "content-type": "application/json" },
  params: {
    limit: 12,
  },
});

export const getAllCars = async (page) => {
  const respons = await instance.get(`/adverts?page=${page}`);
  return respons.data;
};
