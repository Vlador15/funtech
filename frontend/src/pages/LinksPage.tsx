import { Box, Typography } from '@mui/material';
import CreateLinkForm from '../features/links/components/CreateLinkForm.tsx';
import LinksList from '../features/links/components/LinksList.tsx';

const LinksPage = () => {
  return (
    <Box>
      <CreateLinkForm />
      <LinksList />
    </Box>
  );
};

export default LinksPage;
