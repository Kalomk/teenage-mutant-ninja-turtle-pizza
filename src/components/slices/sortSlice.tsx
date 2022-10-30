import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { filteredPizza } from './filtersSlice';
import { RootState } from '../../store';
const initialState: { activeSort: string } = {
  activeSort: 'popular',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changePizzaSort: (state, action: PayloadAction<string>) => {
      state.activeSort = action.payload;
    },
  },
});

export const sortedPizzas = createSelector(
  filteredPizza,
  (state: RootState) => state.sort.activeSort,
  (pizzas, sort) => {
    switch (sort) {
      case 'popular':
        return pizzas.slice().sort((a: any, b: any) => a.rating - b.rating);
      case 'price':
        return pizzas.slice().sort((a: any, b: any) => a.price - b.price);
      case 'Alphabet':
        return pizzas.slice().sort((a: any, b: any) => a.title.localeCompare(b.title));
      default:
        return pizzas;
    }
  }
);

const { actions, reducer } = sortSlice;
export default reducer;
export const { changePizzaSort } = actions;
