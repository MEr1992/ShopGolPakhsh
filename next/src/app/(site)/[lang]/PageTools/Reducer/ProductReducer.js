export const initialState = {
    loading: false,
    products: [],
    categories: [],
    filters: {
        category: "",
        search: "",
        line: "",
        min: "",
        max: "",
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, loading: true };
        case 'STOP_LOADING':
            return { ...state, loading: false };
    
        case 'SET_INFO':
            return { ...state, products: action.products, categories: action.categories };
        case 'SET_PRODUCTS':
            return { ...state, products: action.products };
        case 'LOAD_MORE_PRODUCTS':
            return { ...state, products: [...state.products, ...action.products], offset: state.offset + action.limit };

        case 'SET_FILTER':
            return { ...state, filters: {...state.filters, ...action.data} };
        case 'SET_SEARCH':
            return { ...state, filters: {...state.filters, search: action.filter} };
        case 'SET_LINE':
            return { ...state, filters: {...state.filters, line: action.filter, category: ""} };
        case 'SET_CATEGORY':
            return { ...state, filters: {...state.filters, category: action.filter, line: ""} };
        case 'SET_MIN':
            return { ...state, filters: {...state.filters, min: action.filter} };
        case 'SET_MAX':
            return { ...state, filters: {...state.filters, max: action.filter} };
            
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};