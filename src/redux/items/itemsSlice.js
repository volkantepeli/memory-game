import { createSlice } from "@reduxjs/toolkit";
import itemsJSON from '../../items.json';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: itemsJSON.items.sort(() => Math.random() - 0.5),
    },
    reducers:{},
})


export default itemsSlice.reducer;