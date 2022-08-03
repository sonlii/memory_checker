import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";

import Players from "./players/Players";
import CardsHolder from "./cards/CardsHolder";
import {reset} from "../redux/game/gameSlice";

import "./Page.css"

function get_n_players(p: string | null) {
    return (p !== "1" && p !== "2" && p !== "3" && p !== "4") ? 2 : parseInt(p);
}

function GamePage() {
    const [params] = useSearchParams();
    const n_players = get_n_players(params.get('players'))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reset(n_players))
    }, [dispatch, n_players])

    return (
        <div className="container">
            <Players n_players={n_players}/>
            <CardsHolder/>
        </div>
    );
}

export default GamePage;