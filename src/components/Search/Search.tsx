import searchIcon from '../../img/icons/icons8-search.svg';
import { useState, useCallback } from 'react';
import { handleChangeSearch } from '../slices/searchSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
const Search: React.FC = () => {
  const [activeClass, setActiveClass] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const updateSearchValue = useCallback(
    debounce((value: any) => {
      dispatch(handleChangeSearch(value));
    }, 500),
    []
  );
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={activeClass ? 'searchForm active' : 'searchForm'}>
      <form className="search__root">
        <img className="searchIn" src={searchIcon} alt="searchIcon" />
        <input
          className="search__input"
          type="text"
          placeholder="Search pizzas..."
          value={value}
          onChange={onChangeValue}
        />
      </form>
      <button onClick={() => setActiveClass(!activeClass)} className="search__btn">
        <img src={searchIcon} alt="searchIcon" />
      </button>
    </div>
  );
};
export default Search;
