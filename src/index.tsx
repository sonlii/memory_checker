import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route}
    from "react-router-dom";
import GamePage from "./components/GamePage";
import WelcomePage from "./components/WelcomePage";
import {store} from "./store";

import "./index.css"

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="/game" element={<GamePage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}


render(<App/>, document.getElementById("root"));