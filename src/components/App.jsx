import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/Home'))
const CartPage = lazy(() => import('../Pages/Cart'))
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage'))



export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
