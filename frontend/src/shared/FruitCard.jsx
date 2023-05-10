import React, { useState, useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../untils/avgRating';
import './fruit-card.css';
import { toastMessage } from '../compontents/Toastify';

import axiosClient from 'axios';
import { BASE_URL } from '../untils/config';

const FruitCard = ({ fruit }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { _id, title, city, photo, price, featured, reviews } = fruit;

  // const { addToCart } = useCart;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const product = {
    NameProduct: '',
    title: '',
    city: '',
    address: '',
    distance: '',
    photo: '',
    desc: '',
    price: 99,
    maxGroupSize: 5,
  };

  product.NameProduct = '';
  product['title'] = '';

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post(`${BASE_URL}/cart/add-to-cart`, {
        productId: _id,
      });
      if (response.data.success) {
        setIsAddedToCart(true);
        toastMessage('success', 'Thêm vào giỏ hàng thành công');
        setCartCount(cartCount + 1);
      }
    } catch (error) {
      console.log(error);
      toastMessage('error', 'Thêm vào giỏ hàng thất bại');
    }
  };

  const handleRemoveFromCart = async () => {
    if (cartCount > 0) {
      try {
        const response = await axiosClient.delete(
          `${BASE_URL}/cart/remove-from-cart/${_id}`
        );
        if (response.data.success) {
          setCartCount(cartCount - 1);
          localStorage.setItem('cartCount', cartCount - 1);
          setIsAddedToCart(false);
        }
      } catch (error) {
        console.log(error);
        toastMessage('error', 'Xóa sản phẩm khỏi giỏ hàng thất bại');
      }
    }
  };

  useEffect(() => {
    const cartCount = localStorage.getItem('cartCount');
    setCartCount(cartCount);
  }, []);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axiosClient.get(`${BASE_URL}/cart/addToCart`);
        setCartCount(response.data.cartItems.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartCount();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fruit]);
  return (
    <div className="fruit__card">
      <Card>
        <div className="fruit__img">
          <img src={photo} alt="fruit-img" />
          {featured && <span>Chất lượng</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="fruit__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i>
              {city}
            </span>
            <span className="fruit__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                'Not rated'
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="fruit_title">
            <Link to={`/fruits/${_id}`}>{title}</Link>
          </h5>
          <h5>
            ${price} <span> /kg</span>
          </h5>
          <Link
            to={{
              pathname: '/cart/addToCart',
              search: `add-to-cart=${_id}`,
            }}
            className={`btn booking__btn ${isAddedToCart ? 'btn-success' : ''}`}
            onClick={handleAddToCart}
            onChange={handleRemoveFromCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Đã thêm vào giỏ hàng' : 'Thêm vào giỏ hàng'}
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default FruitCard;
