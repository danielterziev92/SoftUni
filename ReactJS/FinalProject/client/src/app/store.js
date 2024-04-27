import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import userReducer from '../features/user/userSlice';
import messageReducer from '../features/message/messageSlice';
import historyReducer from '../features/history/historySlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        notification: messageReducer,
        history: historyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;