export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_CART":
            let updatedProducts = [...state.cartItems]
            const existingCartItemIndex = state.cartItems.findIndex(item => item._id === action.product._id)
            if(existingCartItemIndex !== -1) {
                updatedProducts[existingCartItemIndex] = {
                    ...state.cartItems[existingCartItemIndex],
                    quantity: state.cartItems[existingCartItemIndex].quantity + action.product.quantity
                }
            }else {
                updatedProducts = [...state.cartItems, action.product]
            }

            return {
                ...state,
                cartItems: updatedProducts
            }
        case "INCREASE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item._id === action.id ? {...item, quantity: item.quantity + 1} : item
                )
            }
        case "DECREASE_ITEM":

            let items = [...state.cartItems]
            let findItem =  items.findIndex(item => item._id === action.id)

            if(findItem !== -1) {
                if(items[findItem].quantity > 1) {
                    items[findItem] = {
                        ...items[findItem],
                        quantity: items[findItem].quantity - 1
                    }
                }else if(items[findItem].quantity === 1) {
                    items = items.filter(item => item._id !== action.id)
                }
            }

            return {
                ...state,
                cartItems: items
            }
        case "CLEAR_CART":
            return {
                ...state,
                cartItems: []
            }
    }
}