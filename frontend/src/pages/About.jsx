import React from 'react';
import '../styles/about.css';
import { Container,Row } from 'reactstrap';

export const About = () => {
  return (
    <>
    <Container>
    <section className="home" id="home">
    <Container>
          <Row>
          <div className="content">
          <h3>Tổng quan</h3>
          <p>
            Tại Hệ thống cửa hàng Fruit Store Nhật Duật, Quý khách sẽ cảm nhận
            được các sản phẩm chất lượng nhất với giá cả hợp lý. Chúng tôi cung
            cấp các mặt hàng có giá tiền phù hợp và đảm bảo an toàn sức khỏe.
            Quý khách có thể tìm thấy các loại trái cây chất lượng như Cam,Ổi,
            ,Xoài,Bưởi da xanh,Thanh Long,Chuối,Mít,Cam Sành,Nhãn,Dừa,Vải...
          </p>
        </div>
        <div className="image">
          <img
            src="https://hoaquafuji.com/storage/app/media/tintuc/cropped-images/pexels-photo-247685-0-0-0-0-1544521580.png"
            alt=""
          />
        </div>
          </Row>
        </Container>
     
      </section>
    </Container>
      
    </>
  );
};
