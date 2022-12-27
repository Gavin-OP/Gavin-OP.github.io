import ReactDOM from "react-dom/client";
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
} from 'react-router-dom';
import geuc from GEUC4001-Data-Analysis.html

function Home() {
    return (
        <>
            <iframe src="geuc"></iframe>
        </>
    );
}


function NoMatch() {
    let location = useLocation();
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}


class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/geuc4011" element={<Home />} />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}


const root = ReactDOM.createRoot(document.querySelector("#index"));
root.render(<App/>);
