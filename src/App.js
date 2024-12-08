import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { routes } from './router/Routes';
// import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;

