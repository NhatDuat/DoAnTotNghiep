import React, { useState, useEffect } from 'react';
import CommonSection from '../shared/CommonSection';

import '../styles/fruit.css';

import FruitCard from './../shared/FruitCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../untils/config.js';

const Fruits = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: fruits,
    loading,
    error,
  } = useFetch(`${BASE_URL}/fruits?page=${page}`);
  const { data: fruitCount } = useFetch(
    `${BASE_URL}/fruits/search/getFruitCount`
  );

  useEffect(() => {
    const pages = Math.ceil(fruitCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, fruitCount, fruits]);

  return (
    <>
      <CommonSection title={'All Fruit'}></CommonSection>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="sec">
        <Container>
          <Row>
            <div className="phan2">
              <div className="hinhanh">
                <div className="img3Anh">
                  <img
                    src="https://png.pngtree.com/png-vector/20210913/ourlarge/pngtree-fruit-platter-fresh-and-fresh-nutritious-and-healthy-png-image_3922446.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="thongtin">
                  <h2>Trái cây</h2>
                  <p>
                    Rất nhiều loại trái cây khác nhau
                    <br />
                    kết lại sẽ tạo nên một sản phẩm ngon,bổ ,khỏe
                  </p>
                </div>
              </div>
              <div className="hinhanh">
                <div className="img3Anh">
                  <img
                    src="https://nguyenlieuphachemientay.com/wp-content/uploads/2020/09/Diem-danh-15-loai-do-uong-hot-nhat-nam-co-vy.jpg"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="thongtin">
                  <h2>Thức uống</h2>
                  <p>
                    Nguyên liệu trái cây làm nên các loại nước ép trái cây khác
                    nhau
                    <br />
                    kết lại sẽ tạo nên một sản phẩm ngon,bổ ,rẻ
                  </p>
                </div>
              </div>
              <div className="hinhanh">
                <div className="img3Anh">
                  <img
                    src="https://hoaquafuji.com/storage/app/media/tintuc/cropped-images/pexels-photo-247685-0-0-0-0-1544521580.png"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="thongtin">
                  <h2>Chất lượng</h2>
                  <p>
                    Rất nhiều loại trái cây khác nhau
                    <br />
                    kết lại sẽ tạo nên một sản phẩm ngon,bổ ,khỏe
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {loading && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              {fruits?.map((fruit) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={fruit._id}>
                  <FruitCard fruit={fruit} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Fruits;
