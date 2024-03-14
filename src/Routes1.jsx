import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Manufacture from './components/Manufacture';
import Driver from './driver/Driver';
import Retailer from './retailer/Retailer';
import Partner from './Partner/Partner';

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Manufacture />
      <Driver />
      <Retailer />
      <Partner />
    </BrowserRouter>
  );
};

export default Routes1;
