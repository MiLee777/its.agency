import axios from "axios";

const BASE_URL = "https://68806a7cf1dcae717b61e917.mockapi.io/api";
const ENDPOINT = "products";

export async function fetchProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/${ENDPOINT}`);
    return res.data;
  } catch (e) {
    console.error("Ошибка при загрузке продуктов", e);
    return [];
  }
}
