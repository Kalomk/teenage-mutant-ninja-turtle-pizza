import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import pizzas from '../components/slices/pizzaSlice';
import filters from '../components/slices/filtersSlice';
import sort from '../components/slices/sortSlice';
import search from '../components/slices/searchSlice';
import cart from '../components/slices/cartSlice';

const store = configureStore({
  reducer: { pizzas, filters, sort, search, cart },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
