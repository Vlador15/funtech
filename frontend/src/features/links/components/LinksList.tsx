import { useAppSelector } from '@/hooks/redux';
import { Stack } from '@mui/material';
import LinkCard from './LinkCard';

const LinksList = () => {
  const links = useAppSelector((s) => s.links.links);

  return (
    <Stack spacing={2}>
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </Stack>
  );
};

export default LinksList;
