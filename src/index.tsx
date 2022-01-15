import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import CardsHolder from './components/cards/CardsHolder';
import Players from './components/players/Players';
import {store} from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <div className="main-container">
            <Players/>
            <CardsHolder/>
        </div>
    </Provider>,
    document.getElementById('root')
);
