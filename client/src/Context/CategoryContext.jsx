import {createContext, useContext, useEffect, useReducer, useState} from 'react'
import {CategoryReducer} from "../Reducers/index.js";
import {categoryData} from "../libs/dummyData.js";
import apiRequest from "../libs/apiRequest.js";

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [state, dispatch] = useReducer(CategoryReducer, {
        categories: [],
        activeCategory: null
    })
    const [categoryLoading, setCategoryLoading] = useState(false)

    const values = {
        ...state,
        categoryDispatch: dispatch,
        categoryLoading
    }

    useEffect(() => {
        const fetchCategory = async () => {

            setCategoryLoading(true)

            try {
                const res = await apiRequest.get('/categories')

                dispatch({
                    type: "SET_CATEGORIES",
                    categories: res.data
                })

            }catch (err) {
                console.log(err)
            }finally {
                setCategoryLoading(false)
            }
        }
        fetchCategory()
    }, []);

    return (
        <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
    )

}

export const useCategory = () => useContext(CategoryContext)
export default CategoryProvider