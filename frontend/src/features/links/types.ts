export type LinkSource = 'vk' | 'telegram' | 'email' | 'ads' | 'direct';

export interface ShortLink {
  id: string;
  originalUrl: string;
  shortUrl: string;
  purpose: string;
  clicks: number;
  createdAt: string;
  stats: {
    date: string;
    clicks: number;
    source: LinkSource;
  }[];
}
