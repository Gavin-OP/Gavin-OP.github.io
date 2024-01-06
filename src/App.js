import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Birthday from './sections/Birthday';


function App() {
  return (
    <>
      {/* website router design */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/20240109' element={<Birthday />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
