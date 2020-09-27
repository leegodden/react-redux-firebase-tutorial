import React from 'react';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';
const HomeLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
