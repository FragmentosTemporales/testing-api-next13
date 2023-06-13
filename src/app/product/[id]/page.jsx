'use client'
import { useState, useEffect } from "react";

function Product({ params }) {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    const res = await fetch(`/api/product/${params.id}`, {
      cache: 'no-store'
    });
    const data = await res.json();
    setProduct(data);
    console.log(data)
  }
  return (
    <div>page product {product.name}</div>
  );
}

export default Product;

