import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Timetable from './timetable_2023_24_T1';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';


function App() {
  return (
    <>
      {/* website router design */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
