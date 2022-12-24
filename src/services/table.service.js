import { axiosInstance } from "../axios";

export async function getTableById(id) {
  const response = await axiosInstance.get("/api/v1/tables/" + id);

  return response.data;
}
