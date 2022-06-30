import React from "react"

import {selectIsActivePlayer, selectPlayerScore} from "../../redux/game/gameSlice";
import {useAppSelector} from "../../store";

import "./Players.css";

function Player(props: { index: number }) {
    const isActivePlayer = useAppSelector(state => selectIsActivePlayer(state.game, props.index));
    const score = useAppSelector(state => selectPlayerScore(state.game, props.index));

    return (
        <div className={isActivePlayer ? "active-player" : "inactive-player"}>
            <p>Player-{props.index}................{score}</p>
        </div>
    );
}

export default Player;