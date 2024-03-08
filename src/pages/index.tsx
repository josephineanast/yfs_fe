import { Outlet, useRoutes, RouteObject, Navigate } from "react-router-dom";

import { DashboardLayout } from "@/components/Layouts";
import { lazyImport } from "@/utils";

const { DashboardRoute } = lazyImport(
  () => import("@/pages/DashboardRoute"),
  "DashboardRoute"
);

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

// -------------------------------------------------------------------------------------

const publicRoutes: RouteObject[] = [
  {
    path: "app",
    element: <Dashboard />,
    children: [{ path: "*", element: <DashboardRoute />, index: true }],
  },
];

const protectedRoutes: RouteObject[] = [];

const commonRoutes: RouteObject[] = [
  { path: "/", element: <Navigate to="app" /> },
  { path: "/*", element: <div>Not Found</div> },
];

// ---------------------------------------------------------------------------------------

export const AppRoutes = () => {
  return useRoutes([...commonRoutes, ...publicRoutes, ...protectedRoutes]);
};
