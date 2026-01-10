import type { User, Tokens } from '@/types/auth.types';
import { authApi } from './authApi';
import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuth: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuth = false;

            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state: any, action: PayloadAction<{ user: User; tokens: Tokens }>) => {
                state.user = action.payload.user;
                state.accessToken = action.payload.tokens.accessToken;
                state.refreshToken = action.payload.tokens.refreshToken;
                state.isAuth = true;

                localStorage.setItem('accessToken', state.accessToken);
                localStorage.setItem('refreshToken', state.refreshToken!);
            }
        );

        builder.addMatcher(
            authApi.endpoints.me.matchFulfilled,
            (state: any, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.isAuth = true;
            }
        );
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;