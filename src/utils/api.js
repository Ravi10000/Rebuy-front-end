import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export async function fetchAllProducts() {
  const { data } = await axios.get(`${baseUrl}/products`);
  console.log({ data });
  return data;
}

export async function signUpUser(user) {
  const { data } = await axios.post(`${baseUrl}/user/signup`, user);
  return data;
}


export async function signInUser(user){
  const {data} = await axios.post(`${baseUrl}/user/signin`, user)
}