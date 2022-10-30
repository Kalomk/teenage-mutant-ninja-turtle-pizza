import Rating from './ratingStars';
import { useParams } from 'react-router';
import { useHttp } from '../../hooks/http.hook';
import { useEffect, useState } from 'react';
import { type } from '../Pizzas/PizzaBlock';
import Spinner from './Spinner';
const SinglePage: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
    rating: number;
    types: number[];
    sizes: number[];
  }>();
  const { request } = useHttp();
  useEffect(() => {
    async function fetch() {
      const res = await request(`https://633211c53ea4956cfb6c6c0f.mockapi.io/items/${id}`);
      setData(res);
    }
    fetch();
    // eslint-disable-next-line
  }, []);
  if (!data) {
    return <Spinner />;
  }
  const { imageUrl, title, description, price, types, sizes, rating } = data;
  return (
    <div className="pizza_singleP _container">
      <div className="pizza_singleP-wrapper">
        <div className="pizza_singleP__left">
          <div className="pizza_singleP__img">
            <img src={imageUrl} alt="pizza" />
          </div>
          <div className="pizza_singleP__price">{price}$</div>
        </div>
        <div className="pizza_singleP__right">
          <div className="pizza_singleP__title">{title}</div>
          <div className="pizza_singleP__description">{description}</div>
          <div className="pizza_singleP__info">
            <div className="pizza_singleP__types">
              <p>{type[types[0]]}</p>
              <b>{sizes[0]}CM</b>
            </div>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
