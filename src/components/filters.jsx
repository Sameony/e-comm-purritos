import React from 'react'
import { useFilters } from '../utils';
const Filters = () => {
    const { state, filterDispatch } = useFilters();
  return (
    <form className="filters">
            <div className="filterHead">
                <h2>Filters</h2>
                <h3 className="btn btn-link-dot" onClick={() => filterDispatch({ type: "RESET" })}>Clear</h3>
            </div>
            <div className="priceSlide">
                <h3>Price</h3>
                <input type="range" min="500" max="25000" list="tickmarks" value={state.maxPrice} className="slider mg-sm" id="myRange" 
                onChange={(e) =>filterDispatch({ type: "MAXPRICE", payload: e.target.value }) }/>
                
                <p className='mg-l-sm'>MaxPrice: <span className='snippets mg-l-sm'>{state.maxPrice}</span></p>
            </div>
            <div className="mg-y-md">
                <h3>Category</h3>
                <input type="checkbox" className="mg-sm" name="shopping" id="plainBlankets" value="plain-blankets" checked={state.category.includes("plain-blankets")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                <label htmlFor="plainBlankets">Plain-Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="pattern-blankets" value="pattern-blankets" checked={state.category.includes("pattern-blankets")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                <label htmlFor="pattern-blankets">Pattern Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="sweaters" value="sweaters" checked={state.category.includes("sweaters")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })} />
                <label htmlFor="sweaters">Sweaters &#38; hoodies</label> <br />
            </div>
            <div className="mg-y-md">
                <h3>Ratings</h3>
                <input className="mg-sm" type="radio" value="4" checked={state.rating === "4"} name="rating"  onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="fourStar"  />
                <label htmlFor="fourStar">4 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="3" checked={state.rating === "3"} name="rating" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="threeStar" />
                <label htmlFor="threeStar">3 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="2" checked={state.rating === "2"} name="rating" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="twoStar" />
                <label htmlFor="twoStar">2 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="1" checked={state.rating === "1"} name="rating" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="oneStar" />
                <label htmlFor="oneStar">1 &nbsp;<i className="fas fa-star"></i> and up</label> <br />
            </div>
            
            <div className="mg-y-md">
                <h3>Sort By</h3>
                <input name="sort" checked={state.sort === "PRICE"} className="mg-sm" type="radio" value="PRICE"  id="sortByPrice" onClick={(e) => filterDispatch({ type: "SORT", payload: e.target.value })} />
                <label htmlFor="sortByPrice">Price</label> <br />
                <input className="mg-sm" type="radio" checked={state.sort === "RATING"} name="sort" value="RATING" id="sortByRating" onClick={(e) => filterDispatch({ type: "SORT", payload: e.target.value })}  />
                <label htmlFor="sortByRating">Ratings</label> <br />
            </div>
        </form>
  )
}

export default Filters