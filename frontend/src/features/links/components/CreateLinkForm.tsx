import {
  Box,
  TextField,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  MenuItem,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { addLink } from '../linksSlice';
import { nanoid } from 'nanoid';

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
    <Box mb={4}>
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          placeholder="Вставьте длинную ссылку"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <Button variant="contained" onClick={handleCreate}>
          Сократить
        </Button>
      </Box>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Настройки ссылки</AccordionSummary>
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
    </Box>
  );
};

export default CreateLinkForm;
