"use client";
import Carousel from "@/app/components/carousel";
import { useEffect, useContext } from "react";
import { Context } from "@/context/Context";


function Product({ params }) {
  const {  getProduct, product } = useContext(Context);


  useEffect(() => {
    getProduct(params.id);
  }, []);

 

  return (
    <div 
    className="container-fluid border"
    style={{ minHeight: "100vh" }}>
      <section 
      style={{borderRadius: "10px"}}
      className="container my-4 bg-warning col-md-12 col-12">
        <div className="row shadow-lg">
          <div className="col-md-6 col-12 ">
            <Carousel
              first={product.first}
              second={product.second}
              third={product.third}
            />
          </div>
          <div className="col-md-6 col-12  ">
            <h1>{product.name}</h1><br />
            <p>Marca: {product.brand}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: {product.price}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
