import { axios } from "@/libs/axios";

export type CreateSessionDTO = {
  email: string;
  password: string;
};

export const createSession = (data: CreateSessionDTO) => {
  return axios.post("/auth/sessions", data);
};
