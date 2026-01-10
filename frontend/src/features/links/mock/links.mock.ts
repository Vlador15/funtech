import type { ShortLink } from '../types';

export const mockLinks: ShortLink[] = [
  {
    id: '1',
    originalUrl: 'https://vk.com/some-product',
    shortUrl: 'ftch.io/abc123',
    purpose: 'VK Ads',
    clicks: 124,
    createdAt: '2024-12-01',
    stats: [
      { date: '2024-12-01', clicks: 30, source: 'vk' },
      { date: '2024-12-02', clicks: 50, source: 'vk' },
      { date: '2024-12-03', clicks: 44, source: 'direct' },
    ],
  },
];
