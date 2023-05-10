import React from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const quick__links = [
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

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Nhật Duật mong muốn đồng hành cùng Quý Khách trong lĩnh vực cung
                cấp HOA QUẢ SẠCH đến tay người tiêu dùng.Trân trọng cảm ơn Quý
                Khách đã đồng hành cùng chúng tôi trong suốt thời gian qua.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i class="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex aligin-items-center gap-3">
                <h6 className="mb-0 d-flex aligin-items-center gap-2 ">
                  <spam>
                    <i class="ri-map-pin-line"></i>
                  </spam>
                  Address:
                </h6>
                <p classNmame="mb-0">Hóa Trung</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex aligin-items-center gap-3">
                <h6 className="mb-0 d-flex aligin-items-center gap-2 ">
                  <spam>
                    <i class="ri-mail-line"></i>
                  </spam>
                  Email:
                </h6>
                <p classNmame="mb-0">nhatduat1@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex aligin-items-center gap-3">
                <h6 className="mb-0 d-flex aligin-items-center gap-2 ">
                  <spam>
                    <i class="ri-phone-line"></i>
                  </spam>
                  Phone:
                </h6>
                <p classNmame="mb-0">0373767570</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year},design and develop by NhatDuat. All rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
