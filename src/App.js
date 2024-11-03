import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './section/Home';
import CNN_LSTM_pdf from './component/page/cnn_lstm_pdf';
import Birthday from './section/Birthday';
import DAR_Strategy_pdf from './component/page/dar_strategy_pdf';
import Notes from './section/Notes';


function App() {
  return (
    <>
      {/* website router design */}
      <HashRouter>
        <Routes basemname={`/${process.env.PUBLIC_URL}`}>
          <Route path="/" element={<Home />} />
          <Route path='/20240109' element={<Birthday />} />
          <Route path='/stat4012-cnn-lstm' element={<CNN_LSTM_pdf />} />
          <Route path='/dar-strategy' element={<DAR_Strategy_pdf />} />
          <Route path='/notes/*' element={<Notes />} />
          <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

