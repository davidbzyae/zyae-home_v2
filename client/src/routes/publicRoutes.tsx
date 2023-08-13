import { Navigate, Outlet } from "react-router-dom";

export const publicRoutes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <>Public</>,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
