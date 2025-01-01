export const initialState = {
    loading: false,
    status: "",
    products: [],
    categories: [],
    filters: {
        category: "",
        search: "",
        line: "",
        min: "",
        max: "",
    },
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
            return { ...state, filters: {...state.filters, ...action.data}, status: "FIRST" };
        case 'SET_SEARCH':
            return { ...state, filters: {...state.filters, search: action.filter}, status: "NEXT" };
        case 'SET_LINE':
            return { ...state, filters: {...state.filters, line: action.filter, category: ""}, status: "NEXT" };
        case 'SET_CATEGORY':
            return { ...state, filters: {...state.filters, category: action.filter, line: ""}, status: "NEXT" };
        case 'SET_MIN':
            return { ...state, filters: {...state.filters, min: action.filter}, status: "NEXT" };
        case 'SET_MAX':
            return { ...state, filters: {...state.filters, max: action.filter}, status: "NEXT" };
            
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};