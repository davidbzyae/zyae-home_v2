import { Navigate, Outlet } from "react-router-dom";

import { AppLayout } from "@/components";
import { Landing } from "@/features/misc";

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
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];
