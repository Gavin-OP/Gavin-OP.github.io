import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Footer from './Footer';
import StaticHTML from './lxyPresentation'

// import GeucReport from './GEUC4011-Data-Analysis';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/GEUC4011-Data-Analysis.html" element={<GeucReport />} /> */}
          <Route path="/psyc1040f" element={<StaticHTML />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
