import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
};

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        clearMessages: (state) => {
            state.messages = [];
        },
    },
});

export const { addMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;