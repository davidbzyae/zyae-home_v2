import { LogIn } from "./LogIn";
import { RouteObject } from "react-router-dom";
import { SignUp } from "./SignUp";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
