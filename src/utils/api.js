import axios from "axios";

axios.defaults.baseURL = `http://localhost:5000`
// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "/api/";

export async function fetchAllProducts() {
  const { data } = await axios.get(`${BASE_URL}products`);
  console.log({ data });
  return data;
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
