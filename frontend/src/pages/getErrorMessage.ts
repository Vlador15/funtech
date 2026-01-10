import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorMessage = (error: unknown): string => {
    if (!error) return 'Ошибка';

    if ((error as FetchBaseQueryError).status) {
        const err = error as FetchBaseQueryError;
        if (typeof err.data === 'object' && err.data && 'message' in err.data) {
            return String((err.data as { message: string }).message);
        }
        return `Ошибка ${err.status}`;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return 'Неизвестная ошибка';
};
