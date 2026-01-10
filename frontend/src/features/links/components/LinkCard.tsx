import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { ShortLink } from '../types';

const LinkCard = ({ link }: { link: ShortLink }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ cursor: 'pointer' }} onClick={() => navigate(`/links/${link.id}`)}>
      <CardContent>
        <Typography variant="subtitle1">{link.shortUrl}</Typography>
        <Typography variant="body2" color="text.secondary">
          {link.originalUrl}
        </Typography>

        <Box mt={1} display="flex" gap={1}>
          <Chip label={link.purpose} />
          <Chip label={`Клики: ${link.clicks}`} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LinkCard;
