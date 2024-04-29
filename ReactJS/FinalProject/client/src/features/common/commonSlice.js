import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isMinimizedAsideBar: true,
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeIsMinimizedAsideBar: (state, action) => {
            state.isMinimizedAsideBar = action.payload;
        }
    }
});

export const {
    changeIsMinimizedAsideBar,
} = commonSlice.actions;


export default commonSlice.reducer;