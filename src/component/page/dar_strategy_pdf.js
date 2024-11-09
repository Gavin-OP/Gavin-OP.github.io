import React from 'react';
// import Navigation from '../common/Navbar';

const DarStrategyPdf = () => {
    return (
        <div style={{ height: '100vh' }}>
            {/* <Navigation /> */}
            <object data={process.env.PUBLIC_URL + "/file/DAR_Strategy.pdf"} width="100%" height="100%">
                {/* <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p> */}
            </object>
        </div>
    );
};

export default DarStrategyPdf;


