import { axiosInstance } from "../axios";

export async function login(user) {
  const response = await axiosInstance.post(
    "/users/sign_in",
    { user: user },
    { headers: { "content-type": "application/json" } }
  );

  return response;
}
