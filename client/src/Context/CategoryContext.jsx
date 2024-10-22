import {createContext, useContext, useEffect, useReducer} from 'react'
import {CategoryReducer} from "../Reducers/index.js";
import {categoryData} from "../libs/dummyData.js";

const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [state, dispatch] = useReducer(CategoryReducer, {
        categories: [],
    })

    const values = {
        ...state,
        categoryDispatch: dispatch
    }

    useEffect(() => {
        dispatch({
            type: "SET_CATEGORIES",
            categories: categoryData
        })
    }, []);

    return (
        <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
    )

}

export const useCategory = () => useContext(CategoryContext)
export default CategoryProvider