import spinner from '../../img/icons/tmnt_gif.gif';
import styles from './page.module.scss';

const Spinner: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <img src={spinner} alt="" />
      loading...
    </div>
  );
};

export default Spinner;
