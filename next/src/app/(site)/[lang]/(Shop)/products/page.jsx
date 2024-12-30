"use client"

import React, { useReducer,useEffect,useState } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/Banner";
import { Product } from "@/app/(site)/[lang]/(Shop)/products/Product";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/SideBar";
import { initialState, reducer } from '@/app/(site)/[lang]/(Shop)/Reducer/ReducerProduct';

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    const local = params?.lang ? params?.lang : 'en';
    let laralelUrl = "/products";
    // let [items, setItems] = useState();
	// const [page, setPage] = useState(1);
  	// const [hasMore, setHasMore] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', 1);
        // getNeedles(`${local}${laralelUrl}?${urlParams.toString()}&type=first`, (items)=>dispatch({type:"SET_INFO", categories: items.categories, products: items.products, filters: getQueryParams(urlParams)}));
        dispatch({ type:'SET_FILTER', data: getQueryParams(urlParams) });
    }, []);

    function getQueryParams(params) {
        const queryObject = {};
        for (const [key, value] of params.entries()) {
            queryObject[key] = value;
        }
        return queryObject;
    }

    useEffect(() => {        
        const query = new URLSearchParams();
        Object.keys(state.filters).map((key)=>{
            query.set(key, state.filters[key]);
        })
        getNeedles(`${local}${laralelUrl}?${query.toString()}`, (items)=>dispatch({type:"SET_INFO", products: items.products, categories: items.categories}));
        window.history.replaceState({}, '', `?${query.toString()}`);

    }, [state.filters]);

	const loadMore = () => {
		if (hasMore) {
		  setPage((prev) => prev + 1);
		}
	};

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <section className="content-inner-3 pt-3 z-index-unset">
				<div className="container">
					<div className="row">
                        <SideBar categories={state?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} dispatch={dispatch} state={state} />
                        <Product items={state?.products} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} loadMore={loadMore} />
                    </div>
				</div>
			</section>
        </>
    );
};