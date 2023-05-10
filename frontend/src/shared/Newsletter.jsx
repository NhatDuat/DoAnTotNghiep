import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import Grilfruit from '../assets/images/gril-fruit.jpg';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Thông tin cơ bản</h2>

              <p>
                Bằng sự nỗ lực không ngừng nghỉ Nhật Duật đã trở thành một địa
                chỉ tin cậy chuyên cung cấp các loại hoa quả Sạch có chất lượng
                tốt nhất với giá cả hợp lý và nhiều ưu đãi cho tất cả Khách
                hàng. Mọi hoạt động kinh doanh của Nhật Duật đều hướng tới mục
                đích cuối cùng: Phục vụ tốt nhất cho nhu cầu và sức khỏe người
                tiêu dùng. Hãy đến với Nhật Duật sẽ cập nhật thông tin mới nhất
                về sản phẩm đến quý khách. Sản phẩm mới Sản phẩm khuyến mãi
                Chương trình ưu đãi dành riêng cho quý khách
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={Grilfruit} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
