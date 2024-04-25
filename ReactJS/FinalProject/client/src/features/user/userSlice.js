import {createSlice} from "@reduxjs/toolkit";

// const dispatch = useDispatch();

const initialState = {
    data: {
        id: '',
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        picture_url: '',
        company_id: '',
    },
    isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            state.data = action.payload.user;
        },
        logoutUser: (state) => {
            state.data = {};
            state.isAuthenticated = false;
        },
        checkAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        fetchUserData: (state, action) => {
            state.data = action.payload;
        },
        updateUserData: (state, action) => {
            return {
                ...state,
                data: {...state.data, ...action.payload},
            }
        },
        deleteProfilePicture: (state, action) => {
            return {
                ...state,
                data: {...state.data, picture_url: '',}
            };
        },
    },
});

export const {
    loginUser,
    logoutUser,
    checkAuth, checkAuthFinished,
    fetchUserData,
    updateUserData,
    updateUserDataFailure,
    deleteProfilePicture,
} = userSlice.actions;

export const selectUser = (state) => state.user.data;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;


export default userSlice.reducer;