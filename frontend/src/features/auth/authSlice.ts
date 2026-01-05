import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi, AuthResponse, User } from './authApi';

// Тип состояния аутентификации
interface AuthState {
    user: User | null;
    isAuth: boolean;
    // можно добавить поля: loading, error, tokens в state при необходимости
}

const initialState: AuthState = {
    user: null,
    isAuth: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Пример: действие logout для выхода пользователя
        logout: (state) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            state.user = null;
            state.isAuth = false;
        }
    },
    extraReducers: (builder) => {
        // Обрабатываем успешную регистрацию через matcher RTK Query
        builder.addMatcher(
            authApi.endpoints.register.matchFulfilled,
            (state, action: PayloadAction<AuthResponse>) => {
                // Срабатывает, когда регистрация прошла успешно (fulfilled)
                // Сохраняем токены в localStorage
                localStorage.setItem('accessToken', action.payload.tokens.accessToken);
                localStorage.setItem('refreshToken', action.payload.tokens.refreshToken);
                // Обновляем состояние аутентификации
                state.user = action.payload.user;
                state.isAuth = true;
            }
        );
        // Можно добавить другие matcher'ы или case reducers для login, logout и т.д.
    }
});

// Экспортируем редюсер и экшены
export const { logout } = authSlice.actions;
export default authSlice.reducer;
