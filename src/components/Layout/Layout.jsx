import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
