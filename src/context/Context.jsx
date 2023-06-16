"use client";
import { createContext, useContext, useState, useEffect } from "react";


export const Context = createContext();

export const useStore = () => {
    const context = useContext(Context)
    if (!context) throw new Error('useTask must used within a provider')
    return context
}

export const ContextProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/api/product", { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  function getProduct(id) {
    const productId = parseInt(id);
    const product = products.find(product => product.id === productId);
    if (product) {
      setProduct(product); // Actualizar el estado "product" con el producto encontrado
      console.log(product);
    } else {
      console.log(`No se encontró ningún producto con el ID ${id}`);
    }
  }
  
  
  
 
  return <Context.Provider value={{products, getProduct, product}}>
    {children}
    </Context.Provider>;
};