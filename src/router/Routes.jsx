import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../features/home/pages/HomePage"));
// const CnnLstmPdfPage = lazy(() =>
//   import("../features/home/pages/CnnLstmPdfPage")
// );
// const NotesPage = lazy(() => import("../features/notes/pages/NotesPage"));
// const BirthdayPage = lazy(() => import("../features/fun/pages/BirthdayPage"));
// const DarStrategyPdfPage = lazy(() =>
//   import("../features/home/pages/DarStrategyPdfPage")
// );
// const TestPage = lazy(() => import("../features/notes/pages/TestPage"));

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //     path: '/test/',
  //     element: <TestPage />
  // },
  // {
  //     path: '/notes/*',
  //     element: <NotesPage />
  // },
  // {
  //     path: '/stat4012-cnn-lstm',
  //     element: <CnnLstmPdfPage />
  // },
  // {
  //     path: '/20240109',
  //     element: <BirthdayPage />
  // },
  // {
  //     path: '/dar-strategy',
  //     element: <DarStrategyPdfPage />
  // },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
