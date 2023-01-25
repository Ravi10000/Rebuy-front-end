import axios from "axios";

axios.defaults.baseURL = `/api`;

// /api/user
export async function signUpUser(user) {
  const response = await axios.post(`/user/signup`, user);
  return response;
}

export async function signInUser(user) {
  console.log('signinng in user');
  const response = await axios.post(`/user/signin`, user);
  return response;
}

export async function signOutUser() {
  const response = await axios.post("/user/signout");
  return response;
}

export async function fetchUserFromServer() {
  const response = await axios.get(`/user`);
  return response;
}

// /api/products

export async function fetchAllProducts() {
  const response = await axios.get("/products");
  return response;
}

export async function fetchProductById(id) {
  const response = await axios.get(`/products/${id}`);
  return response;
}

export async function fetchMoreProducts({ skip, limit }) {
  const response = await axios.get(
    `/products/?skip=${skip}&limit=${limit || 10}`
  );
  return response;
}

export default axios;
