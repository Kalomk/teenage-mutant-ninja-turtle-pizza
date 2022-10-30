import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState: { activeFilter: number } = {
  activeFilter: 0,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changePizzaFilter: (state, action: PayloadAction<number>) => {
      state.activeFilter = action.payload;
    },
  },
});

export const filteredPizza = createSelector(
  (state: RootState) => state.pizzas.pizzas,
  (state: RootState) => state.filters.activeFilter,
  (pizzas, filter) => {
    if (filter > 0) {
      return pizzas.filter((item) => item.category === filter);
    } else {
      return pizzas;
    }
  }
);

const { actions, reducer } = filtersSlice;
export default reducer;
export const { changePizzaFilter } = actions;
