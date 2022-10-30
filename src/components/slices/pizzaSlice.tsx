import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

export type PizzaType = {
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
  id: string | string;
  category: number;
};

export enum Status {
  LOADING = 'loading',
  IDLE = 'idle',
  ERROR = 'error',
}
interface PizzasSliceType {
  pizzas: PizzaType[];
  pizzasLoadingStatus: Status;
}

const initialState: PizzasSliceType = {
  pizzas: [],
  pizzasLoadingStatus: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<PizzaType[]>('pizzas/fetchPizzas', async () => {
  const { request } = useHttp();
  return await request(`https://633211c53ea4956cfb6c6c0f.mockapi.io/items`);
});
const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzasLoadingStatus = Status.LOADING;
      state.pizzas = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzasLoadingStatus = Status.IDLE;
      state.pizzas = action.payload;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzasLoadingStatus = Status.ERROR;
      state.pizzas = [];
    });
  },
});

const { reducer } = pizzasSlice;
export default reducer;
