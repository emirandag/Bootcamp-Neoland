import { updateToken } from "../../utils/updateToken";
import { APIuser } from "./serviceApiUser.config";

export const registerUser = async (formData) => {
    return APIuser.post("/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" }
    })
    .then((res) => res)
    .catch((error) => error)
}

export const checkCodeConfirmationUser = async (formData) => {
    return APIuser.post("/users/check", formData)
      .then((res) => res)
      .catch((error) => error);
  };

export const loginUser = async (formData) => {
  return APIuser.post("/users/login", formData)
  .then((res) => res)
  .catch((error) => error)
}
  