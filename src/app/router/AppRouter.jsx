import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "./routesConfig";

const AppRouter = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routesConfig.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
