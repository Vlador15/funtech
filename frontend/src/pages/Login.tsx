import { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Alert,
} from '@mui/material';
import {
    useLoginMutation,
    useRegisterMutation,
} from '../features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import React from "react";
import {getErrorMessage} from "@/pages/getErrorMessage.ts";

const Login = () => {
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errorText, setErrorText] = useState<string | null>(null);

    const [login, loginState] = useLoginMutation();
    const [register, registerState] = useRegisterMutation();

    const handleSubmit = async () => {
        setErrorText(null);

        if (isRegister && password !== confirm) {
            setErrorText('Пароли не совпадают');
            return;
        }

        try {
            if (isRegister) {
                await register({ username, password }).unwrap();
            } else {
                await login({ username, password }).unwrap();
            }

            navigate('/profile');
        } catch (e) {
            setErrorText(getErrorMessage(e));
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper sx={{ p: 4, width: 360 }}>
                <Typography variant="h5" mb={2} textAlign="center">
                    {isRegister ? 'Регистрация' : 'Вход'}
                </Typography>

                {errorText && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {errorText}
                    </Alert>
                )}

                <TextField
                    label="Логин"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    label="Пароль"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isRegister && (
                    <TextField
                        label="Повтор пароля"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                )}

                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleSubmit}
                    disabled={loginState.isLoading || registerState.isLoading}
                >
                    {isRegister ? 'Создать аккаунт' : 'Войти'}
                </Button>

                <Button
                    fullWidth
                    sx={{ mt: 1 }}
                    onClick={() => {
                        setIsRegister((v) => !v);
                        setErrorText(null);
                    }}
                >
                    {isRegister ? 'Уже есть аккаунт' : 'Создать аккаунт'}
                </Button>
            </Paper>
        </Box>
    );
};

export default Login;
