'use client'
import React, { useEffect, useState } from 'react';

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("/api/products", {
      cache: 'no-store'
    });
    const data = await res.json();
    setData(data);
  }

  const cargador =({src, width}) => {
    return `${src}?w=${width}`
  }

  return (
    <main>
      <h1>Página principal de la tienda</h1>
      <div>
        {data.map((product, id) => (
          <div className='card' key={id}>
            <h2>{product.name}</h2>
            <img width="400px" src={product.avatar} alt={product.id}></img>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Page;
