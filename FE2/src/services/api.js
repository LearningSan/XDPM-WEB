import axios from "axios";

const API_URL = "https://nhom15-chieu-t6.onrender.com";

export const userAPI = {
  getAllUsers: () => axios.get(`${API_URL}/users`),

  createUser: (data) => axios.post(`${API_URL}/users`, data),

  updateUser: (id, data) => axios.put(`${API_URL}/users/${id}`, data),

  deleteUser: (id) => axios.delete(`${API_URL}/users/${id}`)
};