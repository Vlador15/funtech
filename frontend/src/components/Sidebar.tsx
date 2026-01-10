import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
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
          background: '#242424',
          borderRight: '1px solid #404040',
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton onClick={() => navigate('/profile')}>
          <Typography fontSize={22} color="#b3b3b3">
            Главная
          </Typography>
        </ListItemButton>

        <ListItemButton onClick={() => navigate('/links')}>
          <Typography fontSize={22} color="#b3b3b3">
            Сокращатор ссылок
          </Typography>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
