import { axiosInstance } from "../axios";

export async function getAllCategories() {
  const response = await axiosInstance.get("/api/v1/categories");
  return response.data;
}
