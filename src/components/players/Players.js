import React from "react"
import Player from "./Player";

import './Players.css';

function Players() {
    return (
        <div className="players">
            <p>Players Rating</p>
            <hr />
            <Player playerNumber={0}/>
            <Player playerNumber={1}/>
        </div>
    );
}

export default Players;