export const initialState = {
    laralelUrl: "/blog",
    url: "",
    page: 1,
    loading: false,
    status: "",
    blogs: [],
    mostVisitedBlogs: [],
    subjects: [],
    filters: {
        subject: "",
        search: "",
        sort: "",
    },
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, loading: true };
        case 'STOP_LOADING':
            return { ...state, loading: false };
    
        case 'SET_INFO':
            return { ...state, blogs: action.blogs, mostVisitedBlogs: action.mostVisitedBlogs, subjects: action.subjects, url: action.url };
        case 'SET_BLOGS':
            return { ...state, blogs: action.blogs, url: action.url };

        // case 'Remove_FILTER':
        //     return { ...state, filters: action.data, status: "Remove" };
        case 'SET_FILTER':
            return { ...state, filters: {...state.filters, ...action.data}, status: "FIRST", page: 1 };
        case 'SET_SEARCH':
            return { ...state, filters: {...state.filters, search: action.filter}, status: "NEXT", page: 1 };
        case 'SET_SUBJECT':
            return { ...state, filters: {...state.filters, subject: action.filter}, status: "NEXT", page: 1 };
            
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};