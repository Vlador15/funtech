import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from '../hooks/redux.ts';
import { logout } from '../features/auth/authSlice.ts';

interface Props {
  drawerWidth: number;
}

const Navbar = ({ drawerWidth }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        borderBottom: '1px solid #404040',
        background: '#242424',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: '#0e99ff' }}>
        <Typography variant="h5">FunTech</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1">{user?.username}</Typography>

          <IconButton color="inherit" onClick={() => dispatch(logout())}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
