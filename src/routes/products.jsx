import React from 'react'
import { Filters, ProductCard } from '../components'
const Products = () => {
  return (
    <div className="pageContainer">
      <Filters />
      <div className="pageContent pd-md">
        <ProductCard />  
        <ProductCard />  
        <ProductCard />  
        <ProductCard />  
        <ProductCard />  
      </div>
    </div>
  )
}

export default Products