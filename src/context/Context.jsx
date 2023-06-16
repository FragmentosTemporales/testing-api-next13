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
  
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    fetch("/api/product", { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  function getProduct(id) {
    const product = products.find(product => product.id === id);
    console.log(products)
    if (product) {
      console.log(product);
    } else {
      console.log(`No se encontró ningún producto con el ID ${id}`);
    }
  }
  
  
 
  return <Context.Provider value={{products, getProduct}}>
    {children}
    </Context.Provider>;
};