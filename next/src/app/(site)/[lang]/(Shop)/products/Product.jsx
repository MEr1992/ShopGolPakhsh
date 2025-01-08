"use client"

import React, { useContext, useEffect } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { List,Column,Grid,Paging,FilterRight,FilterLeft } from "@/app/(site)/[lang]/(Shop)/products/ProductComponent";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';
import { useData } from "@/Theme/Midone/Utils/Data";

export const Product = ({ assetsPath, mediaPath, local, Lang }) => {
	let { getNeedles } = useData();
    // let laralelUrl = "/products";
	const {state, dispatch } = useContext(ProductContext);

	useEffect(() => {
		if(state.status == "FIRST") 
			return;
        
		dispatch('START_LOADING');
        // const query = new URLSearchParams();
		const query = (state.status == "")? new URLSearchParams(window.location.search) : new URLSearchParams();
        Object.keys(state.filters).map((key)=>{
			let value= state.filters[key];
            if(value != "") query.set(key, value);
        });
        getNeedles(`${local}${state.laralelUrl}?${query.toString()}&type=${state.status == "" && "first"}`, (items)=>
            {
				if(state.status == ""){
					dispatch('SET_INFO', { products: items.products, categories: items.categories});
				}else{
					dispatch('SET_PRODUCTS', { products: items.products });
				}
                dispatch('STOP_LOADING');
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);
    }, [state.filters]);

	return(
		<>
			{(state.loading)?
				<LoadingPage />
			:
				<div className="col-xl-9 col-lg-12">
					<div className="filter-wrapper">
						<div className="filter-left-area">
							<FilterLeft Lang={Lang} local={local} />	
						</div>
						<div className="filter-right-area">
							<FilterRight Lang={Lang} />
						</div>
					</div>
					<div className="row">
						<div className="col-12 tab-content shop-" id="pills-tabContent">
							{(state.filters.display=="" || state.filters.display=="grid")?
								<Grid assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
							:
								(state.filters.display=="column")?
									<Column assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
								:
									<List assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
							}
						</div>
					</div>
					{/* <Paging /> */}
				</div>
			}		
    	</>
	);
}