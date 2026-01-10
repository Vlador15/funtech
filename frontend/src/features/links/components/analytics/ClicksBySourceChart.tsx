import { Card, CardContent, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import type { ShortLink, LinkSource } from '../../types';

interface Props {
  stats: ShortLink['stats'];
}

const sourceMap: Record<LinkSource, string> = {
  vk: 'VK',
  telegram: 'Telegram',
  email: 'Email',
  ads: 'Ads',
  direct: 'Direct',
};

const ClicksBySourceChart = ({ stats }: Props) => {
  if (!stats.length) {
    return (
      <Card>
        <CardContent>
          <Typography color="text.secondary">Пока нет данных</Typography>
        </CardContent>
      </Card>
    );
  }

  const aggregated = Object.values(
    stats.reduce<Record<string, { id: string; value: number }>>((acc, cur) => {
      acc[cur.source] ??= { id: cur.source, value: 0 };
      acc[cur.source].value += cur.clicks;
      return acc;
    }, {}),
  ).map((s) => ({
    ...s,
    label: sourceMap[s.id as LinkSource],
  }));

  return (
    <Card>
      <CardContent>
        <Typography mb={2}>Источники</Typography>

        <PieChart
          height={260}
          series={[
            {
              data: aggregated,
              innerRadius: 50,
              paddingAngle: 4,
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default ClicksBySourceChart;
