import { Card, CardContent, Typography, Box } from '@mui/material';
import { useAppSelector } from '../hooks/redux';

const Profile = () => {
    const user = useAppSelector((s) => s.auth.user);

    if (!user) return null;

    return (
        <Box sx={{ maxWidth: 600 }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Профиль
                    </Typography>

                    <Typography variant="body1">
                        <strong>ID:</strong> {user.id}
                    </Typography>

                    <Typography variant="body1">
                        <strong>Логин:</strong> {user.username}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Profile;
