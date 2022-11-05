import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/pages/Spinner';
import Loadable from 'react-loadable';
import './styles/style.scss';
const PageNotFound = lazy(() => import('./components/pages/PageNotFound'));
const Home = lazy(() => import('./components/Home/Home'));
const Cart = Loadable({
  loader: () => import('./components/Cart/Cart'),
  loading: () => <Spinner />,
});
const SinglePage = lazy(() => import('./components/pages/SinglePage'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<Spinner />}>
                <Cart />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/pizza/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <SinglePage />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
