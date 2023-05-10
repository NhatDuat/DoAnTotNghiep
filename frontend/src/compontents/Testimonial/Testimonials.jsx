import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/gallery-01.jfif';
import ava02 from '../../assets/images/gallery-04.jfif';
import ava03 from '../../assets/images/gallery-06.jfif';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Đu đủ có vị dễ ăn và nhiều chất dinh dưỡng </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Đu Đủ</h6>
            <p>Chữa bệnh</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Khế có tác dụng thanh nhiệt, giải khát,tiêu viêm</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Khế</h6>
            <p>Chữa bệnh</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Bơ giúp tăng cường sức khỏe và tâm trạng</p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Bơ</h6>
            <p>Bảo vệ mắt tốt</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>có vị dễ ăn và nhiều chất dinh dưỡng </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Đu Đủ</h6>
            <p>Đặc sản</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
