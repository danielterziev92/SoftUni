import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    all: [],
};

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.all.push({
                message: action.payload.message,
                status: action.payload.status,
                timeoutId: 0,
            });
        },
        clearAllMessages: (state) => {
            state.all = [];
        },
    },
});

export const {
    addMessage,
    clearAllMessages,
} = messageSlice.actions;

export default messageSlice.reducer;