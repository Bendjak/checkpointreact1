import React from 'react';
import product from '../product';
import { Card } from 'react-bootstrap';

function Image() {
  return <Card.Img variant="top" src={product.imageUrl} alt={product.name} />;
}

export default Image;
