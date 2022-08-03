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
            dispatch(checkCards());
            dispatch(popCard());
            setIsSelected(false);
        }, 3000);
    };

    return (
        <button className="playing-card" disabled={isSelected || isRevealed || !isActive} onClick={selectCard}>
            {
                isRevealed ?
                    <img src={exposed} alt="playing-card"/> :
                    isSelected ?
                        <img src={AllCards[cardNumber]} alt="playing-card"/> :
                        <img src={back} alt="playing-card"/>
            }
        </button>
    );
}

export default Card;
