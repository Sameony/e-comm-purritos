import React from 'react'

const Filters = () => {
  return (
    <aside className="filters">
            <div className="filterHead">
                <h2>Filters</h2>
                <h4 className="btn btn-link-dot">Clear</h4>
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
                <input type="checkbox" className="mg-sm" name="shopping" id="RedBurrito" />
                <label for="RedBurrito">Red Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="whiteBurrito" />
                <label for="whiteBurrito">White Blankets</label> <br />
                <input type="checkbox" className="mg-sm" name="shopping" id="BlackBurrito" />
                <label for="BlackBurrito">Black Blankets</label> <br />
            </div>
            <div className="mg-y-md">
                <h3>Ratings</h3>
                <input className="mg-sm" type="radio" name="Ratings" id="fourStar" />
                <label for="fourStar">4 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" name="Ratings" id="threeStar" />
                <label for="threeStar">3 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" name="Ratings" id="twoStar" />
                <label for="twoStar">2 <i className="fas fa-star"></i> and up</label> <br />
                <input className="mg-sm" type="radio" name="Ratings" id="oneStar" />
                <label for="oneStar">1 &nbsp;<i className="fas fa-star"></i> and up</label> <br />
            </div>
            <div className="mg-y-md">
                <h3>Sort By</h3>
                <input className="mg-sm" type="radio" name="sortby" id="sortByPrice" />
                <label for="sortByPrice">Price</label> <br />
                <input className="mg-sm" type="radio" name="sortby" id="sortByRating" />
                <label for="sortByRating">Ratings</label> <br />
            </div>
        </aside>
  )
}

export default Filters