import { useState, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { routesConfig } from "./router/Routes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routesConfig.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
