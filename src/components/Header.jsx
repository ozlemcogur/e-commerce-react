import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';

const Header = () => {
  const { basket } = useContext(BasketContext)
  const total = basket.reduce((total, i) => total + i.amount, 0)
  return (
    <div className='d-flex justify-content-between align-items-center p-4 sticky-top'>
      <Link to={"/"}>
        <h2>Context Store</h2>
      </Link>
      <Link to={"/sepet"}>
        <i className="bi bi-cart2 fs-2 text-light"></i>
        <span className='badge bg-danger mx-2 fs-7'>{total}</span>
      </Link>
    </div>
  )
}

export default Header

