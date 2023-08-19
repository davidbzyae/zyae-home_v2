import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

export const authRoutes = [
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
