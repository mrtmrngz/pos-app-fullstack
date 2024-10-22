import {createContext, useContext, useEffect, useReducer} from 'react'
import {ProductReducer} from '../Reducers/index.js'
import {productData} from "../libs/dummyData.js";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, {
        products: []
    })

    const values = {
        ...state,
        productDispatch: dispatch
    }

    useEffect(() => {
        dispatch({
            type: "SET_PRODUCTS",
            products: productData
        })
    }, [])

    return (
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )

}

export const useProduct = () => useContext(ProductContext)
export default ProductProvider