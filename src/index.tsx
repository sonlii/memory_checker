import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import Players from "./components/players/Players";
import CardsHolder from "./components/cards/CardsHolder";

const App = () => {
    return (
        <Provider store={store}>
            <div className="main-container">
                <Players/>
                <CardsHolder/>
            </div>
        </Provider>
    );
}


render(<App />, document.getElementById("root"));