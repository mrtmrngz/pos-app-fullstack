export default function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.products,
                allProducts: action.products
            }
        case "ADD_PRODUCT":
            const updatedProducts = [...state.products, action.product]
            return {
                ...state,
                products: updatedProducts
            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map(product =>
                    product._id === action.payload._id ? action.payload : product
                )
            }
        case "DELETE_PRODUCT":
            const filteredProducts = state.products.filter(product => product._id !== action.id)
            return {
                ...state,
                products: filteredProducts
            }
        case "CHANGE_PRODUCTS" :
            let changeProducts;
            if(!action.id) {
                changeProducts = state.allProducts
            }else {
                changeProducts = state.allProducts.filter(item => item.categoryId === action.id)
            }

            return {
                ...state,
                products: changeProducts
            }
        case "SEARCH_PRODUCTS":
            return {
                ...state,
                searchValue: action.value
            }
    }
}