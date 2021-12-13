import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './redux/players/playersSlice'

export const store = configureStore({
    reducer: {
        players: playersReducer,
    },
})