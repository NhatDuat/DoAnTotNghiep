import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/xoai.jpg';
import heroImg02 from '../assets/images/camsanh.jpg';
import heroImg03 from '../assets/images/man.jpg';
import Subtitle from './../shared/Subtitle';
import experienceImg from '../assets/images/experience.jpg';
import SearchBar from '../shared/SearchBar';
import FeaturedFruitList from '../compontents/Featured.fruits/FeaturedFruitList';
import MasonryImagesGallery from '../compontents/Image-gallery/MasonryImagesGallery';
import Testimonials from '../compontents/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import { toastMessage } from '../compontents/Toastify';
const Home = () => {
  return (
    <>
      {/* ============ Thông tin trái cây=========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Giới Thiệu'} />
                </div>
                <h1>
                  Trái cây nổi tiếng tại{' '}
                  <span className="hightlight">Quảng Nam</span>
                </h1>
                <p>
                  Cửa hàng trái cây đảm bảo chất lượng tại Quảng Nam.Trái cây
                  tươi ngon giá thành phải chăng và đặc biệt không có thuốc trừ
                  sâu.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <img src={heroImg03} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*=================Phần tham quan trái cây===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={'Loại trái cây'} />
              <h2 className="featured__tour-title">
                Là nhà cung cấp thực phẩm tươi sạch
              </h2>
            </Col>
            <FeaturedFruitList />
          </Row>
        </Container>
      </section>

      {/*=================Phần tham quan cuối===========*/}

      {/*=================experience section start===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Xem thêm'} />
                <h2>
                  Thực phẩm <br />
                  sạch{' '}
                </h2>
                <p>
                  Quả tươi ngon tự trồng trong khu vườn tại nhà là sự lựa chọn
                  của rất nhiều gia đình
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>1</span>
                  <h6>Khỏe mạnh</h6>
                </div>
                <div className="counter__box">
                  <span>2</span>
                  <h6>Lành mạnh</h6>
                </div>
                <div className="counter__box">
                  <span>3</span>
                  <h6>An toàn</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
                {/* <img src={} alt="" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*=================experience section end===========*/}

      {/*=================gallery section start===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Phần 3'} />
              <h2 className="gallery__title">Sản phẩm</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*=================gallery section end===========*/}

      {/*=================testimonital section start===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Phần 4'} />
              <h2 className="testimonial__title">Trái cây Đặc Sản</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/*=================testimonital section end===========*/}

      <Newsletter />
    </>
  );
};

export default Home;
