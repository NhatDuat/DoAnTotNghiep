import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

import { BASE_URL } from './../untils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const TraicaytuoingonRef = useRef('');
  const navigate = useNavigate();

  const searchTraicay = async () => {
    const Traicaytuoingon = TraicaytuoingonRef.current.value;
  
    if (Traicaytuoingon === '' ) {
      return alert('Bạn phải nhập đủ các yêu cầu!');
    }

    const res = await fetch(
      `${BASE_URL}/fruits/search/getFruitBySearch?title=${Traicaytuoingon}`
    );

    if (!res.ok) alert('Something went wrong');

    const result = await res.json();
    console.log(searchTraicay)
    navigate(
      `/fruits/search?title=${Traicaytuoingon}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex algin-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast ">
            <span>
              <i class="ri-heart-pulse-fill"></i>
            </span>
            <div>
              <h6>Trái cây tươi ngon</h6>
              <input
                type="text"
                placeholder="Loại trái cây"
                ref={TraicaytuoingonRef}
              />
            </div>
          </FormGroup>
                   
          <span className="search__icon" type="submit" onClick={searchTraicay}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
