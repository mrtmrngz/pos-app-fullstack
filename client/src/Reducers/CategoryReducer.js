export default function reducer(state, action) {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.categories
            }
        case "ADD_CATEGORY":
            const updatedCategories = [...state.categories, action.data]

            return {
                ...state,
                categories: updatedCategories
            }
        case "UPDATE_CATEGORY":

            return {
                ...state,
                categories: state.categories.map(category =>
                    category._id === action.payload._id ? action.payload : category
                )
            }
        case "DELETE_CATEGORY":
            const filteredCategory = state.categories.filter(category => category._id !== action.id)
            return {
                ...state,
                categories: filteredCategory
            }
        case "SELECTED_CATEGORY":
            return {
                ...state,
                activeCategory: action.value
            }
    }
}