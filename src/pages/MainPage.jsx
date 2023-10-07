import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Card from './Card';

const MainPage = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
  }, [])
  return (
    <div className='my-5 container d-flex flex-wrap justify-content-center justify-content-md-between gap-5'>
      {!products && <Loading />}
      {products?.map((item) => <Card key={item.id} item={item} />
      )}
    </div>
  )
}

export default MainPage
