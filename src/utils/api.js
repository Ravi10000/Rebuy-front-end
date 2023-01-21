import axios from "axios";

axios.defaults.baseURL = `http://localhost:5000`;
// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "/api/";

export async function fetchAllProducts() {
  const response = await axios.get(`${BASE_URL}products`);
  return response;
}

export async function signUpUser(user) {
  console.log(user);
  const response = await axios.post(`${BASE_URL}user/signup`, user);
  return response;
}

export async function signInUser(user) {
  const response = await axios.post(`${BASE_URL}user/signin`, user);
  return response;
}

export async function fetchUserFromServer() {
  const response = await axios.get(`${BASE_URL}user`);
  return response;
}

export async function fetchProductById(id) {
  const response = await axios.get(`${BASE_URL}products/${id}`);
  return response;
}

export async function fetchMoreProducts({ skip, limit }) {
  const response = await axios.get(
    `${BASE_URL}products/?skip=${skip}&limit=${limit || 10}`
  );
  return response;
}
