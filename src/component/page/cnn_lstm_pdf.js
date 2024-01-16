import React from 'react';
import Navigation from '../common/Navbar';

const CNN_LSTM_pdf = () => {
    return (
        <div style={{ height: '100vh' }}>
            {/* <Navigation /> */}
            <object data={process.env.PUBLIC_URL + "/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf"} width="100%" height="100%">
                {/* <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p> */}
            </object>
        </div>
    );
};

export default CNN_LSTM_pdf;

