import {
  Box,
  TextField,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  MenuItem,
  Typography,
  styled,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { addLink } from '../linksSlice';
import { nanoid } from 'nanoid';

const HeroBox = styled(Box)(() => ({
  padding: '32px',
  borderRadius: 20,
  background: 'linear-gradient(135deg, rgba(91,140,255,0.15), rgba(91,140,255,0.02))',
}));

const CreateLinkForm = () => {
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState('');
  const [purpose, setPurpose] = useState('VK');

  const handleCreate = () => {
    dispatch(
      addLink({
        id: nanoid(),
        originalUrl: url,
        shortUrl: `ftch.io/${nanoid(6)}`,
        purpose,
        clicks: 0,
        createdAt: new Date().toISOString(),
        stats: [],
      }),
    );
    setUrl('');
  };

  return (
    <Box>
      <Box display="flex" gap={1}>
        <HeroBox mb={4} flex={1}>
          <Typography variant="h4" mb={1}>
            Сокращайте ссылки. Анализируйте трафик.
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Минимум действий — максимум аналитики
          </Typography>

          <Box display="flex" gap={1}>
            <TextField fullWidth placeholder="https://example.com" />
            <Button variant="contained">Сократить</Button>
          </Box>

          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Настройки для ссылки
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                select
                fullWidth
                label="Назначение"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <MenuItem value="VK">VK</MenuItem>
                <MenuItem value="Telegram">Telegram</MenuItem>
                <MenuItem value="Email">Email</MenuItem>
                <MenuItem value="Ads">Ads</MenuItem>
              </TextField>
            </AccordionDetails>
          </Accordion>
        </HeroBox>
      </Box>
    </Box>
  );
};

export default CreateLinkForm;
