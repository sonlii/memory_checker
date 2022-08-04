import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const MAX_PLAYERS_QTY = 4;

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
    n_players: number

    score: number[]
    attempts: number[]
}

function init(state: GameState, n_players: number) {
    state.firstCard = null;
    state.secondCard = null;

    state.revealedCards = [];
    state.status = GameStepStatus.FINISHED;

    state.activePlayer = 0;
    state.n_players = n_players;

    state.score = new Array<number>(n_players).fill(0);
    state.attempts = new Array<number>(n_players).fill(0);

    return state
}

export const gameSlice = createSlice({
    name: 'game',
    initialState: init({} as GameState, MAX_PLAYERS_QTY),

    reducers: {
        reset: (state: GameState, n_players: PayloadAction<number>) => {
            init(state, n_players.payload)
        },

        putCard: (state: GameState, index: PayloadAction<number>) => {
            if (state.firstCard == null) {
                state.firstCard = index.payload;
                state.status = GameStepStatus.STARTED;
                return;
            }
            if (state.secondCard == null) {
                state.secondCard = index.payload;
                state.status = GameStepStatus.FULL;

                const attempts = [...state.attempts];
                attempts[state.activePlayer] += 1;
                state.attempts = attempts;

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
                state.activePlayer = (state.activePlayer + 1) % state.n_players;
            }
        },
    },
})

export const {reset, putCard, checkCards, popCard} = gameSlice.actions

export default gameSlice.reducer

export const selectPlayerScore = (state: GameState, player: number) => {
    return state.score[player];
}

export const selectPlayerAttempts = (state: GameState, player: number) => {
    return state.attempts[player];
}

export const selectIsActivePlayer = (state: GameState, player: number) => {
    return state.activePlayer === player;
}

export const selectIfReady2open = (state: GameState) => {
    return state.status === GameStepStatus.STARTED || state.status === GameStepStatus.FINISHED;
}

export const selectRevealedCards = (state: GameState) => state.revealedCards;

