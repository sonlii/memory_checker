import React from "react"

import Player from "./Player";

import "./Players.css";

function Players(props: { n_players: number }) {
    const n_players = props.n_players;

    return (
        <div className="players">
            <p>SCORE</p>
            <hr/>
            {Array.from(Array(n_players).keys())
                .map((i) => <Player key={i} index={i}/>)}
        </div>
    );
}

export default Players;