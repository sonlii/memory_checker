import React from "react"

import Player from "./Player";

import "./Players.css";

function Players(props: { n_players: number }) {
    const n_players = props.n_players;

    return (
        <div className="players-dropdown">
            <button>SCORE</button>
            <div className="players-dropdown-content">
                {Array.from(Array(n_players).keys())
                    .map((i) => <Player key={i} index={i}/>)}
            </div>
        </div>
    );
}

export default Players;