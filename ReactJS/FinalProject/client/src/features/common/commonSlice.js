import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isMinimizedAsideBar: true,
    theme: 'Light',
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeIsMinimizedAsideBar: (state, action) => {
            state.isMinimizedAsideBar = action.payload;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const {
    changeIsMinimizedAsideBar,
    changeTheme,
} = commonSlice.actions;


export default commonSlice.reducer;