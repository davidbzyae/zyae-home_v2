import { CssBaseline } from "@mui/material";
import { publicRoutes } from "./publicRoutes";
import { useRoutes } from "react-router-dom";
import { useTokenService } from "@/hooks";

export const AppRoutes = () => {
  const { status } = useTokenService();

  const element = useRoutes(publicRoutes);

  if (status == "loading") return <CssBaseline />;
  return element;
};
