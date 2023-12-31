'use client'
import { useStore } from '@/context/Context';
import Card from './card';

function Cards() {
    const {products} = useStore()
  return (
    <div className='container d-flex py-5 my-5'>
        <div className='row d-flex justify-content-around'>
          {products.map((product, id) => (
          <Card 
          brand={product.brand}
          key={product.id}
          first={product.first}
          name= {product.name}
          price= {product.price}
          id={product.id}
          />
        ))}</div>
      </div>
  )
}

export default Cards