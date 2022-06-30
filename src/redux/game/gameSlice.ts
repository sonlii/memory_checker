import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const N_PLAYERS = 2;

enum GameStepStatus {
    STARTED,
    FULL,
    WAITING,
    FINISHED,
}

interface GameState {
    firstCard: number | null
    secondCard: number | null

    revealedCards: number[]
    status: GameStepStatus

    activePlayer: number
    score: number[]
}

const initialState = {
    firstCard: null,
    secondCard: null,

    revealedCards: [],
    status: GameStepStatus.FINISHED,

    activePlayer: 0,
    score: new Array<number>(N_PLAYERS).fill(0),
} as GameState

export const gameSlice = createSlice({
    name: 'game',
    initialState,

    reducers: {
        putCard: (state: GameState, index: PayloadAction<number>) => {
            if (state.firstCard == null) {
                state.firstCard = index.payload;
                state.status = GameStepStatus.STARTED;
                return;
            }
            if (state.secondCard == null) {
                state.secondCard = index.payload;
                state.status = GameStepStatus.FULL;
                return;
            }
        },

        checkCards: (state: GameState) => {
            if (state.firstCard != null && state.firstCard === state.secondCard) {
                state.revealedCards = [...state.revealedCards, state.firstCard];

                const scores = [...state.score];
                scores[state.activePlayer] += 1;
                state.score = scores;
            }
        },

        popCard: (state: GameState) => {
            if (state.secondCard != null) {
                state.secondCard = null;
                state.status = GameStepStatus.WAITING;
                return;
            }
            if (state.firstCard != null) {
                state.firstCard = null;
                state.status = GameStepStatus.FINISHED;
                state.activePlayer = (state.activePlayer + 1) % N_PLAYERS;
            }
        },
    },
})

export const {putCard, checkCards, popCard} = gameSlice.actions

export default gameSlice.reducer

export const selectPlayerScore = (state: GameState, player: number) => {
    return state.score[player];
}

export const selectIsActivePlayer = (state: GameState, player: number) => {
    return state.activePlayer === player;
}

export const selectIfReady2open = (state: GameState) => {
    return state.status === GameStepStatus.STARTED || state.status === GameStepStatus.FINISHED;
}

export const selectRevealedCards = (state: GameState) => state.revealedCards;

