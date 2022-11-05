import { calcTotalPrice } from './calcTotalPrice';
import { CartItem } from '../components/slices/cartSlice';

export const getCartFromLs = () => {
  const data = localStorage.getItem('cart');
  const res = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(res);
  return {
    cartItems: res as CartItem[],
    totalPrice,
  };
};
