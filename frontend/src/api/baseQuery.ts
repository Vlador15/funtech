import {
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { logout } from '@/features/auth/authSlice';
import type { RootState } from '@/store';
import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const baseQueryWithAuth = async (
    args: Parameters<typeof baseQuery>[0],
    api: Parameters<typeof baseQuery>[1],
    extraOptions: Parameters<typeof baseQuery>[2]
) => {
    const result = await baseQuery(args, api, extraOptions);

    if (
        result.error &&
        (result.error as FetchBaseQueryError).status === 401
    ) {
        api.dispatch(logout());
    }

    return result;
};
