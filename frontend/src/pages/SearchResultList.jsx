import React, { useState } from 'react';

import CommonSection from './../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import FruitCard from '../shared/FruitCard';
import Newsletter from '../shared/Newsletter';
const SearchResulList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);
  return (
    <>
      <CommonSection title={'Fruit Search Result'} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className='text-center'>No fruit found</h4>
            ) : (
              data?.map((fruit) => (
                <Col lg="3" className="mb-4" key={fruit._id}>
             
                  <FruitCard fruit={fruit} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default SearchResulList;
