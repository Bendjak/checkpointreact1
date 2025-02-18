import React from 'react';
import product from '../product';

function Price() {
  return <p className="card-text text-success">{product.price}</p>;
}

export default Price;
