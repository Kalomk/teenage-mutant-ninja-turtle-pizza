import Filters from '../filters/Filters';
import '../../styles/style.scss';
import PizzaGallery from '../Pizzas/PizzaGallery';

const Home: React.FC = () => {
  return (
    <>
      <Filters />
      <PizzaGallery />
    </>
  );
};

export default Home;
