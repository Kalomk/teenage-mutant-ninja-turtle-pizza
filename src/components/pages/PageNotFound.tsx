import error from '../../img/090d4eebaa9533a8440127e929790368.gif';
import style from './page.module.scss';
const PageNotFound: React.FC = () => {
  return (
    <div className={style.root}>
      <h2>Page not found</h2>
      <img src={error} alt="error" />
    </div>
  );
};
export default PageNotFound;
