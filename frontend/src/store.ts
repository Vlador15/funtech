import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './features/auth/authApi';
import authReducer from './features/auth/authSlice';
import linksReducer from './features/links/linksSlice.ts';

export const store = configureStore({
  reducer: {
    // Подключаем сгенерированный редюсер RTK Query для authApi
    [authApi.reducerPath]: authApi.reducer,

    // Подключаем редюсер нашего authSlice под именем "auth"
    auth: authReducer,
    links: linksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

// Определяем типы RootState и AppDispatch для использования в хуках и типизации
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
