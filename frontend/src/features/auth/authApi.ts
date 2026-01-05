// src/api/authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define User and auth-related response/request types
export interface User {
    id: number;
    email: string;
    name: string;
}

export interface AuthResponse {
    user: User;
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

// Create an RTK Query API slice for auth endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `/api`,
        prepareHeaders: (headers) => {
            headers.set('authorization', localStorage.getItem('accessToken'));
            return headers;
        },
    }),
    endpoints: ({mutation}) => ({
        // Registration endpoint (POST /auth/register)
        register: mutation<AuthResponse, RegisterRequest>({
            query: (credentials: RegisterRequest) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        // Login endpoint (POST /auth/login)
        login: mutation<AuthResponse, LoginRequest>({
            query: (credentials: LoginRequest) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const { useRegisterMutation, useLoginMutation } = authApi;
