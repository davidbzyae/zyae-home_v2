import { axios } from "@/libs/axios";

export const getGoogleAuthUrl = async (): Promise<string> => {
  return (
    await axios.get<{ data: { url: string } }>(
      `/auth/google/url/?rd=${document.location.origin}`
    )
  ).data.data.url;
};
