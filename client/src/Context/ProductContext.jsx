import {createContext, useContext, useEffect, useReducer, useState} from 'react'
import {ProductReducer} from '../Reducers/index.js'
import {productData} from "../libs/dummyData.js";
import apiRequest from "../libs/apiRequest.js";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, {
        products: [],
        allProducts: [],
        searchValue: ""

    })
    const [productLoading, setProductLoading] = useState(false)

    const values = {
        ...state,
        productDispatch: dispatch,
        productLoading
    }

    useEffect(() => {
        const fetchProducts = async () => {

            setProductLoading(true)

            try {
                const res = await apiRequest.get('/products')
                dispatch({
                    type: "SET_PRODUCTS",
                    products: res.data
                })
            }catch (err) {
                console.log(err)
            }finally {
                setProductLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )

}

export const useProduct = () => useContext(ProductContext)
export default ProductProvider