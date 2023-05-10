import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';
const Booking = ({ fruit, avgRating }) => {
  const { price, reviews } = fruit;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: '01', //later it will be dynamic
    userEmail: 'nhatduat1@gmail.com',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  //send data to the server
  const handleClick = (e) => {
    e.preventDefault();

    navigate('/thank-you');

    // console.log(credentials);
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/kg</span>
        </h3>
        <span className="fruit__rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/*==========Booking form========*/}
      <div className="booking__form">
        <h5>Thông tin</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <label for="name" id="label-name">
              Họ và tên *
            </label>
            <input
              type="text"
              placeholder="Nhập họ tên của bạn"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label for="name" id="label-name">
              Số điện thoại*
            </label>
            <input
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label for="email" id="label-email">
              Địa chỉ email*
            </label>
            <input
              type="text"
              placeholder="Email của bạn"
              id="email"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label for="diachi" id="label-diachi">
              Địa chỉ*
            </label>
            <input
              type="text"
              placeholder="Địa chỉ của bạn"
              id="diachi"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <label for="name" id="label-name">
              Ngày:
            </label>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Số lượng"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/*==========Booking end========*/}
      {/*==========Booking bottom========*/}

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"> 1 kg</i>
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Phí vận chuyển</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Tổng cộng</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default Booking;
