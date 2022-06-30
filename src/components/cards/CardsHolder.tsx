import React from "react"

import Card from "./Card";
import {selectIfReady2open, selectRevealedCards} from "../../redux/game/gameSlice";
import {useAppSelector} from "../../store";

const cardNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    .flatMap(i => [i, i]).sort(() => Math.random() - 0.5);

function CardsHolder() {
    const ready2open = useAppSelector(state => selectIfReady2open(state.game));
    const revealedCards = useAppSelector(state => selectRevealedCards(state.game));
    const cards = cardNumbers.map((numb, i) =>
        <Card
            key={i}
            isActive={ready2open}
            isRevealed={revealedCards.includes(numb)}
            cardNumber={numb}
        />);

    return (
        <div className="cards-field">
            {cards}
        </div>
    );
}

export default CardsHolder;
