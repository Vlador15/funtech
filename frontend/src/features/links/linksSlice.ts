import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ShortLink } from './types';
import { mockLinks } from './mock/links.mock';

interface LinksState {
  links: ShortLink[];
}

const initialState: LinksState = {
  links: mockLinks,
};

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, action: PayloadAction<ShortLink>) => {
      state.links.unshift(action.payload);
    },
  },
});

export const { addLink } = linksSlice.actions;
export default linksSlice.reducer;
