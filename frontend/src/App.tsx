import {useMeQuery} from './features/auth/authApi';
import AppRouter from "@/router/AppRouter.tsx";
import {Box} from "@mui/material";

const App = () => {
    const hasToken = !!localStorage.getItem('accessToken');

    const {isLoading} = useMeQuery(undefined, {
        skip: !hasToken,
    });

    if (isLoading) return null; // или Loader

    return (
        <AppRouter/>
    );
};

export default App;
