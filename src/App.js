import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Footer from './Footer';
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
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
