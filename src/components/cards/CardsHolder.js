import React from "react"
import Card from "./Card";

const cardNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].flatMap(i => [i, i]).sort(() => Math.random() - 0.5);

export const cardsEquals = (cardIndex1, cardIndex2) => {
    return cardNumbers[cardIndex1] === cardNumbers[cardIndex2];
}

function CardsHolder() {
    const cards = cardNumbers.map((number, index) => <Card
        key={index}
        cardIndex={index}
        cardNumber={number}
    />);

    return (
        <div className="cards-field">
            {cards}
        </div>
    );
}

export default CardsHolder;
