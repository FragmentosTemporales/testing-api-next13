'use client'
import Carousel from "@/app/components/carousel";
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
    <div style={{minHeight:"100vh"}}>
      <h1 className="text-center">page product {product.name}</h1>
      <section className="container bg-dark">
        <div className="card">
          <div className="img-container">
            <Carousel
            first={product.first}
            second={product.second}
            third={product.third}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;

