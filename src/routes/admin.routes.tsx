import type { RouteObject } from "react-router";
import { lazy } from "react";
import { NotFound } from "@/pages/not-found";
import { AdminLayout } from "@/components/admin-layout";

const Dashboard = lazy(() => import("@/pages/dashboard"));

export const adminRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <div>Users Page</div> },
      { path: "messages", element: <div>Messages Page</div> },
      { path: "teams", element: <div>Teams Page</div> },
      { path: "gallery", element: <div>Gallery Page</div> },
      { path: "analytics", element: <div>Analytics Page</div> },
      { path: "documents", element: <div>Documents Page</div> },
      { path: "settings", element: <div>Settings Page</div> },
      { path: "links", element: <div>Links Page</div> },
      { path: "reports", element: <div>Reports Page</div> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
