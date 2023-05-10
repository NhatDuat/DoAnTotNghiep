import React, { useRef, useEffect, useContext, useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import logo from '../../assets/images/logo.jpg';
import './header.css';
import axiosClient from 'axios';
import { AuthContext } from './../../context/AuthContext';

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/fruits',
    display: 'Fruit',
  },
];
const Header = () => {
  const [setCartCount] = useState(0);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axiosClient.get(
          `http://localhost:4000/api/v1/cart`
        );
        setCartCount(response.data.cartItems.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartCount();
  }, []);

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/*=================logo=============*/}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*=================logo end=============*/}
            {/*=================menu start=============*/}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*=================menu end // login =============*/}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>

                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <Link to="/header" className="cart__icon">
                <BsCartPlusFill />
              </Link>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
