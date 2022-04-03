import React, {useContext} from 'react'
import { Filters, ProductCard } from '../components'
import { ProductContext } from '../context/productContext'
const Products = () => {
  const prodList = useContext(ProductContext);
  return (
    <div className="pageContainer">
      <Filters />
      <div className="pageContent pd-md">
         {prodList.map((item)=>{
           return <ProductCard 
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