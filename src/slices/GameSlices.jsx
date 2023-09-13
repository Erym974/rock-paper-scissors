import { createSlice } from '@reduxjs/toolkit'
import { getDefaultChoice } from '../functions/choices';

export const GameSlices = createSlice({
    name: 'game',
    initialState: {
        you: getDefaultChoice(),
        opponent: null,
        locked: false,
    },
    reducers: {
        setChoice: (state, action) => {
            state.you = action.payload
        },
        setOpponnent: (state, action) => {
            state.opponent = action.payload
        },
        gameRestart: (state, action) => {
            state.you = getDefaultChoice()
            state.opponent = getDefaultChoice()
            state.locked = false
        },
        startGame: (state, action) => {
            state.locked = true
        }
    }
})

export const { setChoice, setOpponnent, gameRestart, startGame } = GameSlices.actions; 