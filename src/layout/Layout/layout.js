import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;