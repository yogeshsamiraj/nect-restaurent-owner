import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));


const Dashboard = lazy(() => import("../view/dashboard.jsx"));


const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "/", element: <Dashboard /> },

    ],
  },
];

export default ThemeRoutes;
