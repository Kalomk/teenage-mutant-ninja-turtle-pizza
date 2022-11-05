import { useEffect } from 'react';
import PizzaBlock from './PizzaBlock';
import MyLoader from './Skeleton';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { fetchPizzas } from '../slices/pizzaSlice';
import { RootState } from '../../store';
import { sortedPizzas } from '../slices/sortSlice';

const PizzaGallery: React.FC = () => {
  const { activeSort } = useSelector((state: RootState) => state.sort);
  const { searchValue } = useSelector((state: RootState) => state.search);
  const pizzas = useSelector(sortedPizzas);
  const status = useSelector((state: RootState) => state.pizzas.pizzasLoadingStatus);
  const dispatch = useAppDispatch();
  const searchedPizzas = pizzas.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchPizzas());
    // eslint-disable-next-line
  }, [activeSort, searchValue]);

  const elements =
    status === 'loading'
      ? [...new Array(8)].map((_, i) => <MyLoader key={i} />)
      : searchedPizzas.map((item) => <PizzaBlock key={item.id} {...item} />);
  return (
    <div className="pizza">
      <div className="pizza__wrapper _container">
        <div className="pizza__content">
          <h2 className="pizza__title">All pizzas</h2>
          <div className="pizza__gallery gallery-pizza">
            <ul className="gallery__items">
              {elements.length > 0 ? elements : <h2 className="pizza__empty">No pizza</h2>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaGallery;
