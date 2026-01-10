export interface User {
    id: number;
    username: string;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface AuthResponse {
    user: User;
    tokens: Tokens;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    username: string;
    password: string;
}
