import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLs } from '../../utils/getCartFromLs';
export type CartItem = {
  title: string;
  imageUrl: string;
  price: number;
  sizes: number;
  types: number;
  id: string | string;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  cartItems: CartItem[];
}

const { cartItems, totalPrice } = getCartFromLs();
const initialState: CartSliceState = {
  cartItems: cartItems,
  totalPrice: totalPrice,
};

const setItems = (cart: any, totalPrice: number) => {
  localStorage.setItem('cart', JSON.stringify(cart.map((item) => item)));
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
};
const filtersSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.cartItems);
      setItems(state.cartItems, state.totalPrice);
    },
    removeItems: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cartItems);
      setItems(state.cartItems, state.totalPrice);
    },
    clearItems: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.setItem('cart', JSON.stringify(state.cartItems.map((item) => item)));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.cartItems.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
        setItems(state.cartItems, state.totalPrice);
      }
    },
  },
});

const { actions, reducer } = filtersSlice;
export default reducer;
export const { addItems, removeItems, clearItems, minusItem } = actions;
