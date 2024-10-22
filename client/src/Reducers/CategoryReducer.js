export default function reducer(state, action) {
    switch (action.type) {
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.categories
            }
    }
}