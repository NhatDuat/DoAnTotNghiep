import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/fruit-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../untils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../compontents/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../untils/config';
import { AuthContext } from '../context/AuthContext';
import { toastMessage } from '../compontents/Toastify';

const FruitDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const { user } = useContext(AuthContext);
  const [fruitRating, setFruitRating] = useState(null);

  const handleClick = (rating) => {
    setFruitRating(rating);
  };

  //fetch data from database
  const { data: fruit, loading, error } = useFetch(`${BASE_URL}/fruits/${id}`);
  //this is an static data later we will call our API and load our data from database
  // const fruit = FruitData.find((fruit) => fruit.id === id);

  //destructure properties from fruit object

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = fruit;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  //format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const [setCredentials] = useState({
    productId: '',
    username: '',
    reviewText: '',
    rating: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //submit request to the server
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        toastMessage('error', error.message || 'Không thể đánh giá');
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: fruitRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (res.ok) {
        toastMessage('success', result.message || 'Đã gửi bài đánh giá');
      }
    } catch (error) {
      toastMessage('error', error.message || 'Không thể đánh giá');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fruit]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="fruit__content">
                  <img src={photo} alt="" />
                  <div className="fruit__info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className="d-flex align-items-center gap-1">
                        <span className="fruit__rating d-flex align-items-center gap-1">
                          <i
                            class="ri-star-fill"
                            style={{ color: 'var(--secondary -color)' }}
                          ></i>{' '}
                          {avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? (
                            'Not rated'
                          ) : (
                            <span>({reviews?.length})</span>
                          )}
                        </span>
                      </span>
                      <span>
                        <i class="ri-map-pin-user-fill"></i> {address}
                      </span>
                    </div>

                    <div className="fruit__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i> ${price}
                        /Kg
                      </span>
                    </div>
                    <h5>Miêu tả chi tiết</h5>
                    <p>
                      <p>
                        Trái cây có nhiều lợi ích cho sức khỏe, bởi vì chúng là
                        nguồn cung cấp chất dinh dưỡng cho cơ thể, chứa nhiều
                        vitamin, khoáng chất, chất xơ và chất chống oxy hóa.
                        Ngoài ra, trái cây còn có thể giúp giảm cân, giảm nguy
                        cơ mắc bệnh tim mạch, đái tháo đường và một số bệnh
                        khác.
                      </p>
                      <p>
                        Các loại trái cây phổ biến bao gồm: cam, bưởi,
                        xoài,vải,nho,thanh long,vải, mít, dừa, và nhiều loại
                        trái cây khác. Chúng có thể được ăn tươi, làm nước ép,
                        nấu chín hoặc sử dụng trong các món ăn và đồ uống khác
                        nhau. Mỗi loại trái cây có đặc điểm riêng về màu sắc,
                        hương vị, cấu trúc và giá trị dinh dưỡng.
                      </p>

                      <p>
                        {' '}
                        Nên được bảo quản trong tủ mát để bảo quản được lâu hơn.
                      </p>
                    </p>
                  </div>
                  {/*================== fruit reviews section==========*/}
                  <div className="fruit__reviews mt-4">
                    <h4>Reviews({reviews?.length} reviews)</h4>

                    <Form onSubmit={submitHandler} onChange={handleChange}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span
                          className={`star ${fruitRating >= 1 ? 'filled' : ''}`}
                          onClick={() => handleClick(1)}
                        >
                          1 <i className="ri-star-fill"></i>
                        </span>
                        <span
                          className={`star ${fruitRating >= 2 ? 'filled' : ''}`}
                          onClick={() => handleClick(2)}
                        >
                          2 <i className="ri-star-fill"></i>
                        </span>
                        <span
                          className={`star ${fruitRating >= 3 ? 'filled' : ''}`}
                          onClick={() => handleClick(3)}
                        >
                          3 <i className="ri-star-fill"></i>
                        </span>
                        <span
                          className={`star ${fruitRating >= 4 ? 'filled' : ''}`}
                          onClick={() => handleClick(4)}
                        >
                          4 <i className="ri-star-fill"></i>
                        </span>
                        <span
                          className={`star ${fruitRating >= 5 ? 'filled' : ''}`}
                          onClick={() => handleClick(5)}
                        >
                          5 <i className="ri-star-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                          onChange={handleChange}
                          onClick={submitHandler}
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between ">
                              <div>
                                <h5>{review.username}</h5>
                                <p className="text-secondary">
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString('en-US', options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center ">
                                {review.rating}
                                <i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/*================== fruit reviews section end==========*/}
                </div>
              </Col>
              <Col lg="4">
                <Booking fruit={fruit} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default FruitDetails;
