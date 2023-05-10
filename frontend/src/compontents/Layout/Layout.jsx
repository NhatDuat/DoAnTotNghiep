import React from 'react';

import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
      <ToastContainer
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
