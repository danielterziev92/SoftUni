import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    browser: [],
    user: [],
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        addBrowser: (state, action) => {
            state.browser.push(action.payload);
        }
    }
})

export const {
    addBrowser,
} = historySlice.actions;

export default historySlice.reducer;