import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './section/Home';
import CNN_LSTM_pdf from './component/page/cnn_lstm_pdf';
import Birthday from './section/Birthday';


function App() {
  return (
    <>
      {/* website router design */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes basemname={`/${process.env.PUBLIC_URL}`}>
          <Route path="/" element={<Home />} />
          <Route path='/20240109' element={<Birthday />} />
          <Route path='/stat4012-cnn-lstm' element={<CNN_LSTM_pdf />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      {/* </BrowserRouter> */}
    </HashRouter>
    </>
  );
}

export default App;
