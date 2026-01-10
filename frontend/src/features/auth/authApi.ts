import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithAuth} from '@/api/baseQuery';
import type {
    AuthResponse,
    LoginRequest,
    RegisterRequest,
    User,
} from '@/types/auth.types';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: baseQueryWithAuth,
    endpoints: ({mutation, query}) => ({
        login: mutation<AuthResponse, LoginRequest>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),

        register: mutation<AuthResponse, RegisterRequest>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
        }),

        me: query<User, void>({
            query: () => '/auth/me',
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useMeQuery,
} = authApi;
