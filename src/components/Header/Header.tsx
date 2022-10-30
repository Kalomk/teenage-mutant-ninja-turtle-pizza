import logo from '../../img/icons/leonardo.png';
import { Link, useLocation } from 'react-router-dom';
import CartHead from '../Cart/CartHead';
import './header.scss';
import Search from '../Search/Search';
const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__wrapper _container">
        <Link to="/" className="header__content">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__body">
            <h1 className="header__title">Ninja pizza</h1>
            <p className="header__text">Pizza time!</p>
          </div>
        </Link>
        {location.pathname === '/' && (
          <div className="menu">
            <Search />
            <CartHead />
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
