import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux';
import { Typography, Box } from '@mui/material';

const LinkAnalyticsPage = () => {
  const { id } = useParams();
  const link = useAppSelector((s) => s.links.links.find((l) => l.id === id));

  if (!link) return null;

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Аналитика ссылки
      </Typography>

      <Typography>{link.shortUrl}</Typography>

      {/* сюда графики */}
    </Box>
  );
};

export default LinkAnalyticsPage;
