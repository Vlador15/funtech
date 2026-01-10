import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
    drawerWidth: number;
}

const Sidebar = ({ drawerWidth }: Props) => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <List>
                <ListItemButton onClick={() => navigate('/profile')}>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </List>
        </Drawer>
    );
};

export default Sidebar;