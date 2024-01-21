import axios from "axios";

const instance = axios.create({
  baseURL: "https://652c55c4d0d1df5273ef5dd9.mockapi.io",
  headers: { "content-type": "application/json" },
  params: {
    page: 1,
    limit: 12,
  },
});

export const getAllCars = () => {
  const respons = instance.get("/adverts");
  return respons.data;
};
