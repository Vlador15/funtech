import { Box, Grid, Typography } from '@mui/material';
import type { ShortLink } from '../../types';
import ClicksByDateChart from './ClicksByDateChart';
import ClicksBySourceChart from './ClicksBySourceChart';

interface Props {
  link: ShortLink;
}

const LinkAnalytics = ({ link }: Props) => {
  return (
    <Box mt={4}>
      <Typography variant="h5" mb={3}>
        Аналитика
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ClicksByDateChart stats={link.stats} />
        </Grid>

        <Grid item xs={12} md={4}>
          <ClicksBySourceChart stats={link.stats} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LinkAnalytics;
