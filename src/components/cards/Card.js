import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {AllCards} from "./Cards";
import {addScore, changeGameStepStatus, changePlayer, GAME_STEP} from "../../redux/players/playersSlice";
import {cardsEquals} from "./CardsHolder";
import back from '../../images/face_down_cards/back.jpg';
import exposed from '../../images/face_down_cards/exposed.jpg';

import './Card.css';

let selectedCards = [];
let foundedCards = [];

function Card(props) {
    const gameStepStatus = useSelector((state) => state.players.gameStepStatus);

    const cardNumber = props.cardNumber;
    const cardIndex = props.cardIndex;
    const dispatch = useDispatch();

    const [isSelected, setIsSelected] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const selectCard = () => {
        if (selectedCards.length === 2) {
            return;
        }
        selectedCards.push(cardIndex);
        setIsSelected(true);
        dispatch(changeGameStepStatus(GAME_STEP.STARTED));
        if (selectedCards.length === 1) {
            return;
        }
        if (cardsEquals(selectedCards[0], selectedCards[1])) {
            setTimeout(function () {
                foundedCards.push(cardNumber);
                dispatch(addScore());
                dispatch(changeGameStepStatus(GAME_STEP.FINISHED));
                selectedCards = [];
            }, 1000);
        } else {
            setTimeout(function () {
                dispatch(changePlayer());
                dispatch(changeGameStepStatus(GAME_STEP.FINISHED));
                selectedCards = [];
            }, 5000);
        }
    };

    useEffect(() => {
            if (gameStepStatus === GAME_STEP.FINISHED) {
                setIsSelected(false);
                setIsFound(foundedCards.includes(cardNumber));
            }
        },
        [gameStepStatus]);

    return (
        <button className="playing-card" disabled={isSelected || isFound} onClick={selectCard}>
            {
                isFound ?
                    <img src={exposed} alt="playing-card"/> :
                    isSelected ?
                        <img src={AllCards[props.cardNumber]} alt="playing-card"/> :
                        <img src={back} alt="playing-card"/>
            }
        </button>
    );
}

export default Card;
