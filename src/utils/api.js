import axios from "axios";

axios.defaults.baseURL = `https://mrphonex-api.onrender.com/api`;

// /api/user
export async function signUpUser(user) {
  const response = await axios.post(`/user/signup`, user);
  return response;
}

export async function signInUser(user) {
  const response = await axios.post(`/user/signin`, user);
  return response;
}

export async function signOutUser() {
  const response = await axios.put("/user/signout");
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

// /api/user/cart

export async function addProductToCart({ productId }) {
  const response = await axios.put(`/user/cart`, { productId });
  return response;
}

export async function removeProductFromCart(productId) {
  const response = await axios.delete(`/user/cart/${productId}`);
  return response;
}

export async function getCartItems() {
  const response = await axios.get("/user/cart");
  return response;
}

export async function placeOrders(orders) {
  const response = await axios.post("/orders/new", { orders });
  return response;
}
export default axios;
