import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";
import { Landing } from "@/features/misc";
import { authRoutes } from "@/features/auth";

export const publicRoutes: RouteObject[] = [
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
