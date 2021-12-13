import {createSlice} from '@reduxjs/toolkit'

const PLAYERS_COUNT = 2;

export const GAME_STEP = {
   STARTED: 'STARTED',
   FINISHED: 'FINISHED'
}
const initialState = {
    activePlayer: 0,
    scores: new Array(PLAYERS_COUNT).fill(0),
    gameStepStatus: GAME_STEP.FINISHED,
}

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        changeGameStepStatus: (state, payload) => {
            state.gameStepStatus = payload.payload;
        },
        changePlayer: (state) => {
            state.activePlayer = state.activePlayer < (PLAYERS_COUNT - 1) ?
                state.activePlayer + 1 : 0;
        },
        addScore: (state) => {
            let scoresCopy = [...state.scores];
            scoresCopy[state.activePlayer] += 1;
            state.scores = scoresCopy;
        }
    },
})

export const {changeGameStepStatus, changePlayer, addScore} = playersSlice.actions

export default playersSlice.reducer