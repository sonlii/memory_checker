import React from "react"
import { useSelector } from 'react-redux'

import './Players.css';

function Player(props) {
    const activePlayer = useSelector((state) => state.players.activePlayer)
    const playerScore = useSelector((state) => state.players.scores[props.playerNumber])

    return (
        <div className={props.playerNumber === activePlayer ? "active-player" : "inactive-player" }>
            <p>Player-{props.playerNumber + 1}................{playerScore}</p>
        </div>
    );
}

export default Player;