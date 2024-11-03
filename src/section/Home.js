import '../css/Home.css';
import Navigation from '../component/common/Navbar';
import Header from '../component/home/Header';
import Internship from '../component/home/Internship';
import Project from '../component/home/Project';
import Footer from '../component/common/Footer';

// import PdfViewer from '../component/common/PdfViewer';
// import Fireworks from '../component/home/Firework';
// import CNN_LSTM_pdf from '../component/page/cnn_lstm_pdf';
// import { PDFViewer } from '@react-pdf/renderer';
// import MyDocument from '../component/common/PdfViewer';


const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Header />
      <Internship />
      <Project />

      {/* <PdfViewer pdfPath={process.env.PUBLIC_URL + '/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf'} /> */}
      {/* <CNN_LSTM_pdf /> */}
      {/* <Fireworks /> */}
      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
      {/* create a button link to Birthday and using Router Link */}
      <Footer />
    </div>
  );
};

export default Home;
