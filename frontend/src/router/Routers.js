import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { About } from '../pages/About';
import FruitDetails from '../pages/FruitDetails';
import Fruits from './../pages/Fruits';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import Thankyou from './../pages/Thankyou';

import { BsCartPlusFill } from 'react-icons/bs';
import Cart from '../pages/Cart';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/fruits/:id" element={<FruitDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/fruits/addToCart" element={<BsCartPlusFill />} />

      <Route path="/fruits/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
