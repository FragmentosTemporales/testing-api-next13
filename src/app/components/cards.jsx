'use client'
import { useStore } from '@/context/Context';
import Card from './card';

function Cards() {
    const {products} = useStore()
  return (
    <div className='container d-flex py-5 my-5'>
        <div className='row d-flex justify-content-between'>
          {products.map((product, id) => (
          <Card 
          key={product.id}
          avatar={product.avatar}
          name= {product.name}
          precio= {product.precio}
          id={product.id}
          />
        ))}</div>
      </div>
  )
}

export default Cards