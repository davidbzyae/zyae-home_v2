import { Navigate, Outlet } from "react-router-dom";

import { AppLayout } from "@/components";

export const publicRoutes = [
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
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
