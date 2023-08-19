import { User } from "@/types";
import { axios } from "@/libs";

export type CreateUserDTO = {
  displayName: string;
  email: string;
  password: string;
};

export const createUser = async (data: CreateUserDTO): Promise<User> => {
  return (await axios.post<{ data: { user: User } }>("/db/users/", data)).data
    .data.user;
};
