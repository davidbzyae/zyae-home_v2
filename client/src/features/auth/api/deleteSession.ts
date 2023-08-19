import { axios } from "@/libs/axios";

export const deleteSession = () => {
  return axios.delete("/auth/sessions");
};
