import { createReducer } from '@reduxjs/toolkit';

export const firstReducer = createReducer(
  {
    count: 0,
  },
  {
    INCREMENT: (state) => {
      state.count += 1;
    },
    DECREMENT: (state) => {
      state.count -= 1;
    },
  }
);
