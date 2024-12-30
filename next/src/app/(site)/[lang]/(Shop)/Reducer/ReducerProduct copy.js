export const initialState = {
    search: "",
    line: "",
    category: "",
    min: "",
    max: "",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return { ...state, search: action.filter };
        case 'SET_LINE':
            return { ...state, line: action.filter };
        case 'SET_CATEGORY':
            return { ...state, category: action.filter };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};