import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../../features/home/pages/HomePage"));
const BirthdayPage = lazy(() => import("../../features/fun/pages/BirthdayPage"));

export const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/20240109",
    element: <BirthdayPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
