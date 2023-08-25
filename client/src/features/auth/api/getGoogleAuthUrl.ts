import { axios } from "@/libs/axios";

export const getGoogleAuthUrl = async (rd: string | null): Promise<string> => {
  return (
    await axios.get<{ data: { url: string } }>(
      `/auth/google/url/?rd=${rd || document.location.origin}`
    )
  ).data.data.url;
};
