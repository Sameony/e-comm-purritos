import React from 'react'
import { filterReducer } from '../reducers/filterReducer'
import { useFilters } from '../context/filterContext';
const Filters = () => {
    const { state, filterDispatch } = useFilters();
  return (
    <form className="filters">
            <div className="filterHead">
                <h2>Filters</h2>
                <button type="reset "className="btn btn-link-dot" onClick={() => filterDispatch({ type: "RESET" })}>Clear</button>
            </div>
            <div className="priceSlide">
                <h3>Price</h3>
                <input type="range" min="999" max="49999" className="slider mg-sm" id="myRange" />
                <div className="labels flex flex-spc-arnd">
                    <p>999</p>
                    <p>25000</p>
                    <p>49999</p>
                </div>
            </div>
            <div className="mg-y-md">
                <h3>Category</h3>
                <input type="checkbox" className="mg-sm" name="shopping" id="plainBlankets" value="plain-blankets" checked={state.category.includes("plain-blankets")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                <label for="plainBlankets">Plain-Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="pattern-blankets" value="pattern-blankets" checked={state.category.includes("pattern-blankets")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })}/>
                <label for="pattern-blankets">Pattern Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="sweaters" value="sweaters" checked={state.category.includes("sweaters")}
                onChange={(e) =>filterDispatch({ type: "CATEGORY", payload: e.target.value })} />
                <label for="sweaters">Sweaters &#38; hoodies</label> <br />
            </div>
            <div className="mg-y-md">
                <h3>Ratings</h3>
                <input className="mg-sm" type="radio" value="4" name="Ratings" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="fourStar"  />
                <label for="fourStar">4 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="3" name="Ratings" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="threeStar" />
                <label for="threeStar">3 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="2" name="Ratings" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="twoStar" />
                <label for="twoStar">2 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" value="1" name="Ratings" onClick={(e) => filterDispatch({ type: "RATINGS", payload:e.target.value })} id="oneStar" />
                <label for="oneStar">1 &nbsp;<i className="fas fa-star"></i> and up</label> <br />
            </div>
            <div className="mg-y-md">
                <h3>Sort By</h3>
                <input className="mg-sm" type="radio" name="sortby" value="PRICE" id="sortByPrice" onClick={(e) => filterDispatch({ type: "SORT", payload: e.target.value })} />
                <label for="sortByPrice">Price</label> <br />
                <input className="mg-sm" type="radio" name="sortby" value="RATING" id="sortByRating" onClick={(e) => filterDispatch({ type: "SORT", payload: e.target.value })}  />
                <label for="sortByRating">Ratings</label> <br />
            </div>
        </form>
  )
}

export default Filters