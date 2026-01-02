function filterReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return {
        ...state,
        productList: payload.products,
      };
    
    case "SORT_BY": 
      return {
        ...state, sortBy: payload.sortBy,
      };

    case "RATE":
      return {
        ...state, rating: payload.rating,
      }

    case "BEST_SELLER":
      return {
        ...state, bestSeller: payload.bestSeller,
      }

    case "IN_STOCK":
      return {
        ...state, inStock: payload.inStock,
      }
    case "CLEAR_FILTER":
      return {
        ...state, inStock : false, bestSeller : false, rating : null, sortBy : null
      } 

    default:
      return state;
  }
}

export default filterReducer;
