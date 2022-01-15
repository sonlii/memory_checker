import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const PLAYERS_COUNT = 2;

export const GAME_STEP = {
   STARTED: 'STARTED',
   FINISHED: 'FINISHED'
}

type PlayersState = {
    activePlayer : number
    scores: number[]
    gameStepStatus: string
}

const initialState = {
    activePlayer: 0,
    scores: new Array(PLAYERS_COUNT).fill(0),
    gameStepStatus: GAME_STEP.FINISHED,
} as PlayersState

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        changeGameStepStatus: (state: PlayersState,  action: PayloadAction<string>) => {
            state.gameStepStatus = action.payload;
        },
        changePlayer: (state: PlayersState) => {
            state.activePlayer = state.activePlayer < (PLAYERS_COUNT - 1) ?
                state.activePlayer + 1 : 0;
        },
        addScore: (state: PlayersState) => {
            let scoresCopy = [...state.scores];
            scoresCopy[state.activePlayer] += 1;
            state.scores = scoresCopy;
        }
    },
})

export const {changeGameStepStatus, changePlayer, addScore} = playersSlice.actions

export const selectActivePlayer = (state: PlayersState) => state.activePlayer
export const selectPlayersScores = (state: PlayersState) => state.scores

export default playersSlice.reducer