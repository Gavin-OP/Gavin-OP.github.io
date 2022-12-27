import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
// import ClassicFormPage from './Test';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

// function for noMatch output
function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        Invalid Link: <code>{location.pathname}</code>{' '}
      </h3>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
