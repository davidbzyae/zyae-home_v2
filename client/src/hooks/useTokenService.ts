import { clearUser, setUser } from "@/stores";
import { useEffect, useState } from "react";

import { User } from "@/types";
import { axios } from "@/libs";
import { useAppDispatch } from ".";

const getMe = async () => {
  try {
    await getNewTokens();
    const user = (await axios.get<{ data: { user: User } }>("db/users/me")).data
      .data.user;
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getNewTokens = async () => {
  try {
    await axios.get("/auth/sessions/tokens");
  } catch (err) {
    console.log(err);
  }
};

export const useTokenService = () => {
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState<"loading" | "auth" | "noauth">(
    "loading"
  );

  useEffect(() => {
    getMe()
      .then((user) => (dispatch(setUser(user)), setStatus("auth")))
      .catch(() => (dispatch(clearUser()), setStatus("noauth")));

    const refreshInterval = setInterval(
      async () => await getNewTokens(),
      1000 * 60 * 5
    );

    return () => clearInterval(refreshInterval);
  }, []);

  return { status };
};
