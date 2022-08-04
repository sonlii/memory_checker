import React, {useState} from "react"
import {useDispatch} from "react-redux";


import {AllCards} from "./Cards";
import {putCard, checkCards, popCard} from "../../redux/game/gameSlice";
import back from "../../images/face_down_cards/back.jpg";
import exposed from "../../images/face_down_cards/revealed.jpg";

import "./Card.css";

function Card(props: { isActive: boolean, isRevealed: boolean, cardNumber: number }) {
    const isActive = props.isActive;
    const isRevealed = props.isRevealed;
    const cardNumber = props.cardNumber;

    const dispatch = useDispatch();

    const [isSelected, setIsSelected] = useState(false);

    const selectCard = () => {
        setIsSelected(true);
        dispatch(putCard(cardNumber));

        setTimeout(function () {
            setIsSelected(false);
            dispatch(checkCards());
            dispatch(popCard());
        }, 3000);
    };

    return (
        isRevealed ?
            <button className="playing-card" disabled={true}>
                <img src={exposed} alt="playing-card"/>
            </button> :
            isSelected ?
                <button className="playing-card" disabled={true}>
                    <img src={AllCards[cardNumber]} alt="playing-card"/>
                </button> :
                <button className="playing-card" disabled={!isActive} onClick={selectCard}>
                    <img src={back} alt="playing-card"/>
                </button>
    );
}

export default Card;
