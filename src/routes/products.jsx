import React from 'react'
import { Filters, ProductCard } from '../components'
import { GetProducts } from '../context/productContext'
const Products = () => {
  const prodList = GetProducts();
  return (
    <div className="pageContainer">
      <Filters />
      <div className="pageContent pd-md">
         {prodList.map((item)=>{
           return <ProductCard
           key={item._id} 
           cardTitle={item.title}
           cardReviews={item.reviews} 
           cardRating={item.rating} 
           Price={item.price} 
           prevPrice={item.prevPrice} 
           img={item.imageUrl} />
         })}
      </div>
    </div>
  )
}

export default Products