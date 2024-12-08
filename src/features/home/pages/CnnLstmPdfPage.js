import React from 'react';

const CnnLstmPdfPage = () => {
    return (
        <div style={{ height: '100vh' }}>
            <object data={process.env.PUBLIC_URL + "/file/Stock_Return_Prediction_with_CNN_and_Attention_based_LSTM_models.pdf"} width="100%" height="100%">
            </object>
        </div>
    );
};

export default CnnLstmPdfPage;

