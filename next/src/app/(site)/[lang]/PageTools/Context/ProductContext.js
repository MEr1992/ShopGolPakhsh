import { createContext,useReducer } from 'react';
import { reducer } from '@/app/(site)/[lang]/PageTools/Reducer/ProductReducer';

function getQueryParams(params) {
  const queryObject = {};
  for (const [key, value] of params.entries()) {
      queryObject[key] = value;
  }
  return queryObject;
}

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, { filters: {}, loading: true });
  const [state, dispatch] = useReducer(reducer, { filters: {} });

  const startLoading = () => {
    dispatch({ type: 'START_LOADING' });
  };
  const stopLoading = () => {
    dispatch({ type: 'STOP_LOADING' });
  };

  const info = (products, categories) => {
    dispatch({ type: "SET_INFO", products: products, categories: categories });
  };
  const loadProducts = (products) => {
    dispatch({ type: 'SET_PRODUCTS', products });
  };
  const loadMoreProducts = (products, limit) => {
    dispatch({ type: 'LOAD_MORE_PRODUCTS', products, limit });
  };

  const filter = (urlParams) => {
    dispatch({ type:'SET_FILTER', data: getQueryParams(urlParams) });
  };
  const search = (search) => {
    dispatch({ type:'SET_SEARCH', filter: search });
  };
  const line = (lineId) => {
    dispatch({ type:'SET_LINE', filter: lineId });
  };
  const category = (categoryId) => {
    dispatch({ type:'SET_CATEGORY', filter: categoryId });
  };
  const min = (min) => {
    dispatch({ type:'SET_CATEGORY', filter: min });
  };
  const max = (max) => {
    dispatch({ type:'SET_CATEGORY', filter: max });
  };
  
    return (
      <ProductContext.Provider value={{ state, startLoading, stopLoading, info, loadProducts, loadMoreProducts, filter, search, line, category, min, max }}>
        {children}
      </ProductContext.Provider>
    );
  };
  
  export { ProductContext, ProductProvider };