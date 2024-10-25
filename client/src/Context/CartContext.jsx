import {createContext, useReducer, useContext, useEffect} from 'react'
import {CartReducer} from "../Reducers/index.js";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, {
        cartItems: JSON.parse(localStorage.getItem('cart')) || []
    })

    const values = {
        ...state,
        cartDispatch: dispatch,
        addCart: (product) => {
            dispatch({
                type: "ADD_CART",
                product: product
            })
        },
        increaseItem: (id) => {
            dispatch({
                type: "INCREASE_ITEM",
                id: id
            })
        },
        decreaseItem: (id) => {
            dispatch({
                type: "DECREASE_ITEM",
                id: id
            })
        },
        clearCart: () => {
            dispatch({
                type: "CLEAR_CART"
            })
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
    }, [state.cartItems])

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
export default CartProvider