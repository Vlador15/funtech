import { Box, Typography } from '@mui/material';
import CreateLinkForm from '../features/links/components/CreateLinkForm.tsx';
import LinksList from '../features/links/components/LinksList.tsx';

const LinksPage = () => {
  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Сокращение ссылок
      </Typography>

      <CreateLinkForm />
      <LinksList />
    </Box>
  );
};

export default LinksPage;
