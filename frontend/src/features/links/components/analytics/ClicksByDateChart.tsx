import { Card, CardContent, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import type { ShortLink } from '../../types';

interface Props {
  stats: ShortLink['stats'];
}

const ClicksByDateChart = ({ stats }: Props) => {
  if (!stats.length) {
    return (
      <Card>
        <CardContent>
          <Typography color="text.secondary">Пока нет данных</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography mb={2}>Клики по датам</Typography>

        <LineChart
          height={260}
          xAxis={[
            {
              scaleType: 'point',
              data: stats.map((s) => s.date),
            },
          ]}
          series={[
            {
              data: stats.map((s) => s.clicks),
              color: '#5B8CFF',
            },
          ]}
          area
          grid={{ horizontal: true }}
        />
      </CardContent>
    </Card>
  );
};

export default ClicksByDateChart;
