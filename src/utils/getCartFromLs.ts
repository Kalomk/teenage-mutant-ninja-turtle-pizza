import { calcTotalPrice } from './calcTotalPrice';

export const getCartFromLs = () => {
  const data = localStorage.getItem('cart');
  const res = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(res);
  return {
    res,
    totalPrice,
  };
};
