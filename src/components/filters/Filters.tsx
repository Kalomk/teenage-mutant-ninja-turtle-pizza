import Sort from '../Sort';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changePizzaFilter } from '../slices/filtersSlice';
import { RootState } from '../../store';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { activeFilter } = useSelector((state: RootState) => state.filters);
  const filters = ['All', 'Meaty', 'Vegan', 'Grill', 'Spicy', 'Closet'];
  const elements = filters.map((item, i) => {
    const btnClass = classNames('btn', 'filters__item', {
      active: i === activeFilter,
    });

    return (
      <li onClick={() => dispatch(changePizzaFilter(i))} key={i} className={btnClass}>
        {item}
      </li>
    );
  });
  return (
    <div className="filters">
      <div className="filters__wrappers _container">
        <div className="filters__content">
          <div className="filters__body">
            <ul className="filters__list">{elements}</ul>
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
