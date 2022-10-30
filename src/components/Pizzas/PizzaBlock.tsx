import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, CartItem } from '../slices/cartSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

export const type = ['Thin', 'Traditional'];

type PizzaItems = {
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
  id: string | string;
};

const PizzaBlock: React.FC<PizzaItems> = ({ title, imageUrl, price, sizes, types, id }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const completeId = id + sizes[activeSize] + types[activeType];
  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((item) => item.id === completeId)
  );

  const addCount = cartItem ? cartItem.count : null;

  const sendToCart = () => {
    const info: CartItem = {
      id: completeId,
      title,
      imageUrl,
      price,
      sizes: sizes[activeSize],
      types: types[activeType],
      count: 0,
    };
    dispatch(addItems(info));
  };

  const checkWare =
    addCount === null ? { opacity: 0 } : { opacity: 1, transition: '0.3s ease-in-out 0s ' };
  return (
    <li className="gallery-items__item pizza-item">
      <Link to={`/pizza/${id}`}>
        <div className="pizza-item__img">
          <img src={imageUrl} alt="pizza" />
        </div>
      </Link>
      <div className="pizza-item__title">{title}</div>
      <div className="pizza-item__selector selector-items">
        <div className="selector-items__top">
          <ul className="selector-items__list selector-menu">
            {types.map((items) => {
              return (
                <li
                  onClick={() => setActiveType(items)}
                  key={items}
                  className={
                    activeType === items ? 'seclector-menu__item active' : 'seclector-menu__item'
                  }
                >
                  {type[items]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="selector-items__bottom">
          <ul className="selector-items__list selector-menu">
            {sizes.map((items, i) => {
              return (
                <li
                  onClick={() => setActiveSize(i)}
                  key={items}
                  className={
                    activeSize === i ? 'seclector-menu__item active' : 'seclector-menu__item'
                  }
                >
                  {items}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pizza-item__buying">
        <div className="pizza-item__buying__price">{price}$</div>
        <button onClick={sendToCart} className="pizza-item__buying__addBtn">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="green"
            />
          </svg>
          <span>Add to cart</span>
          <i style={checkWare}>{addCount}</i>
        </button>
      </div>
    </li>
  );
};
export default PizzaBlock;
