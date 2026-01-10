import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar.tsx';
import Navbar from '../components/Navbar';

const drawerWidth = 240;

export const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: '64px',
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};
