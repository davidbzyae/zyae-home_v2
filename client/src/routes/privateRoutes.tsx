import { Navigate, Outlet, RouteObject } from "react-router-dom";

import { AppLayout } from "@/components";
import { Landing } from "@/features/misc";

export const privateRoutes: RouteObject[] = [
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
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
