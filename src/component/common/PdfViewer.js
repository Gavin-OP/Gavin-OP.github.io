import React from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ pdfPath }) => {
    return (
        <div>
            <Document file={pdfPath}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfViewer;



// import React from 'react';
// import { Worker, Viewer } from 'react-pdf-viewer/core';
// import 'react-pdf-viewer/core/styles/index.css';

// import { pdfjs } from 'react-pdf';


// // Assuming you have a PDF file in the public folder
// const pdfUrl = process.env.PUBLIC_URL + '/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf';

// const PdfViewer = () => {
//   return (
//     <div style={{ height: '500px' }}>
//       <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
//         <Viewer fileUrl={pdfUrl} />
//       </Worker>
//     </div>
//   );
// };

// export default PdfViewer;
