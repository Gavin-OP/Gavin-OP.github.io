import React from 'react';

const DarStrategyPdfPage = () => {
    return (
        <div style={{ height: '100vh' }}>
            <object data={process.env.PUBLIC_URL + "/file/DAR_Strategy.pdf"} width="100%" height="100%">
            </object>
        </div>
    );
};

export default DarStrategyPdfPage;


