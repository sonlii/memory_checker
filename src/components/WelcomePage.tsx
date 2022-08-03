import React from "react"

import {useNavigate} from 'react-router-dom';
import welcome from "../images/welcome.jpg";

import "./Page.css"

function WelcomePage() {
    const navigate = useNavigate();

    const startGame = (n_players: number) => {
        navigate(`/game?players=${n_players}`);
    };

    return (
        <div className="welcome">
            <img src={welcome} alt="playing-card"/>
            <header>Let's start</header>
            <div className="number-of-players">
                <button onClick={() => startGame(1)}>ALONE</button>
                <button onClick={() => startGame(2)}>2 PLAYERS</button>
                <button onClick={() => startGame(3)}>3 PLAYERS</button>
                <button onClick={() => startGame(4)}>4 PLAYERS</button>
            </div>
        </div>
    );
}

export default WelcomePage;