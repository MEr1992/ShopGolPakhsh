export const initialState = {
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
        case 'SET_INFO':
            return { ...state, products: action.products, categories: action.categories, filters: action.filters };
        case 'SET_PRODUCTS':
            return { ...state, products: action.products };
        case 'SET_SEARCH':
            return { ...state, filters: {...state.filters, search: action.filter} };
        case 'SET_LINE':
            return { ...state, filters: {...state.filters, line: action.filter, category: ""} };
        case 'SET_CATEGORY':
            return { ...state, filters: {...state.filters, category: action.filter, line: ""} };
        case 'SET_FILTER':
            return { ...state, filters: {...state.filters, ...action.data} };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

export const reducer0 = (state, action, data) => {
    switch (action) {
        case 'SET_INFO':
            return { ...state, products: data.products, categories: data.categories };
        case 'SET_PRODUCTS':
            return { ...state, products: data };
        case 'SET_SEARCH':
            return { ...state, search: data };
        case 'SET_LINE':
            return { ...state, line: data };
        case 'SET_CATEGORY':
            return { ...state, category: data };
        case 'SET_FILTER':
            console.log('data is: ', 'color: #007acc;', data);
            return { ...state, ...data };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};