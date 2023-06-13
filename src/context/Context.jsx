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

  async function fetchProducts() {
    const res = await fetch("/api/product", {
      cache: 'no-store'
    });
    const data = await res.json();
    setProducts(data);
  }
 
  return <Context.Provider value={{products}}>
    {children}
    </Context.Provider>;
};