import React from "react"
import Player from "./Player";

import "./Players.css";

function Players() {
    return (
        <div className="players">
            <p>Players Rating</p>
            <hr/>
            <Player index={0}/>
            <Player index={1}/>
        </div>
    );
}

export default Players;