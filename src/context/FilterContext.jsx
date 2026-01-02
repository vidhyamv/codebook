import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducer";

const initialState = {
  productList : [],
  inStock : false,
  bestSeller : false,
  rating : null,
  sortBy : null
}

export const FilterContext = createContext(initialState)

export const FilterProvider = ({children}) => {

  const [ state, dispatch ] = useReducer(filterReducer, initialState);

  function initialProductList(products) {
    dispatch ({
      type: "PRODUCT_LIST",
      payload: {
        products: products
      }
    });
  }

  function sorting(products) {

    if(state.sortBy === "lowtohigh") {
      return [...products].sort((a,b) => Number(a.price) - Number(b.price))
    }
    if(state.sortBy === "hightolow") {
      return [...products].sort((a,b) =>  Number(b.price) - Number(a.price))
    }
    return products;
  }

  function rating(products) {
    if(state.rating === "4STARTABOVE") {
      return [...products].filter(product => product.rating >= 4)
    }
    if(state.rating === "3STARTABOVE") {
      return [...products].filter(product => product.rating >= 3)
    }
    if(state.rating === "2STARTABOVE") {
      return [...products].filter(product => product.rating >= 2)
    }
    if(state.rating === "1STARTABOVE") {
      return [...products].filter(product => product.rating >= 1)
    }
    return products;
  }

  function bestSellerProduct(products) {
    return state.bestSeller ? [...products].filter(product => product.best_seller === true) : products;
  }

  function instockProduct(products) {
    return state.inStock ? [...products].filter(product => product.in_stock === true) : products;
  }

  // const filteredProducts = sorting(state.productList);
  //  const filteredProducts = rating(state.productList);
  const filteredProducts = sorting(rating(bestSellerProduct(instockProduct(state.productList))));

  const value = {
    state,
    dispatch,
    productList: state.productList,
    initialProductList,
    filteredProducts,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
}
