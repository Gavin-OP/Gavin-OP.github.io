import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/Home';

import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Birthday from './sections/Birthday';


function App() {
  return (
    <>
      {/* website router design */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes basemname={`/${process.env.PUBLIC_URL}`}>
          <Route path="/" element={<Home />} />
          <Route path='/20240109' element={<Birthday />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      {/* </BrowserRouter> */}
    </HashRouter>
    </>
  );
}

export default App;
