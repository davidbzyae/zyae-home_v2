import { Navigate, Outlet } from "react-router-dom";

import { AppLayout } from "@/components";
import { Landing } from "@/features/misc";
import { authRoutes } from "@/features/auth";

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
        element: <Landing />,
      },
      {
        path: "/",
        children: authRoutes,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
