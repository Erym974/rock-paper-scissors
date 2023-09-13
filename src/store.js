import { configureStore } from '@reduxjs/toolkit';
import { GameSlices } from './slices/GameSlices';

export const store = configureStore({
    reducer: {
        game: GameSlices.reducer,
    }
})