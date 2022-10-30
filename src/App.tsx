import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/pages/Spinner';

const PageNotFound = lazy(() => import('./components/pages/PageNotFound'));
const Home = lazy(() => import('./components/Home/Home'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const SinglePage = lazy(() => import('./components/pages/SinglePage'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/pizza/:id" element={<SinglePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
