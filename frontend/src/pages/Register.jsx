import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import '../styles/login.css';
import axiosClient from '../api/axiosClient.js';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../untils/config';
import { toastMessage } from '../compontents/Toastify';
import axios from 'axios';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/v1/auth/register', credentials)
      .then((res) => {
        dispatch({ type: 'REGISTER_SUCCESS' });
        navigate(`/login`);
        toastMessage('success', res.data.message || 'Dang nhap thasnh cong');
      })
      .catch((err) => {
        toastMessage('error', err.response.data.message || 'Loi he thong');
      });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
