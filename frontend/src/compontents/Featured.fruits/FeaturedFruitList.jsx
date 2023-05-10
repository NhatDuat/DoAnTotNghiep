import React from 'react';
import FruitCard from '../../shared/FruitCard';

import { Col } from 'reactstrap';

import useFetch from './../../hooks/useFetch';
import { BASE_URL } from './../../untils/config';

const FeaturedFruitList = () => {
  const {
    data: featuredFruits,
    loading,
    error,
  } = useFetch(`${BASE_URL}/fruits/search/getFeaturedFruits`);

  console.log(featuredFruits);

  return (
    <>
      {loading && <h4>Loading.......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredFruits?.map((fruit) => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={fruit._id}>
            <FruitCard fruit={fruit} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedFruitList;
