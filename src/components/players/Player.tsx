import React from "react"
import { useSelector } from 'react-redux'
import {selectActivePlayer, selectPlayersScores} from "../../redux/players/playersSlice";

import './Players.css';

type PlayerProps = {
    playerNumber: number
}

function Player({playerNumber} : PlayerProps) {
    const activePlayer = useSelector(selectActivePlayer);
    const playerScore = useSelector(selectPlayersScores);

    return (
        <div className={playerNumber === activePlayer ? "active-player" : "inactive-player" }>
            <p>Player-{playerNumber + 1}................{playerScore}</p>
        </div>
    );
}

export default Player;