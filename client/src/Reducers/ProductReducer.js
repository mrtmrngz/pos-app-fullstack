export default function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products
            }
    }
}