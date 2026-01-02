import { cartReducer } from "../reducer";
import { createContext, useContext, useReducer } from "react"

const initialState = {
  cartList : [],
  total : 0
}

const CartContext = createContext(initialState);

export const CartProvider = (({children}) => {

  const [ state, dispatch ] = useReducer(cartReducer, initialState);

  function addCart(product) {
    const updatedList = state.cartList.concat(product);
    const total = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        updatedList: updatedList,
        total: total
      }
    });
  }

  function removeCart(product) {
    const updatedList = state.cartList.filter((Item)=> Item.id !== product.id);
    const total = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        updatedList: updatedList,
        total: total
      }
    })
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        updatedList: [],
        total: 0
      }
    });
  }

  function updatePrice() {

  }

  const value = {
    cartList: state.cartList,
    total: state.total,
    addCart,
    removeCart,
    clearCart,
    updatePrice
  }

  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
});

export const useCart = (() => {
  const context = useContext(CartContext)
  return context
})
