"use client"
import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { ProductList } from "@/Theme/Site/Components/Cards/ProductList";

export const List = ({ mediaPath,local,Lang,assetsPath }) => {
	const {state} = useContext(ProductContext);

    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-list" role="tabpanel" aria-labelledby="tab-list-list-btn">
				<div className="row">
					{(state?.products?.data)?.map((item,index)=>{
						return(
							<ProductList item={item} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} index={index} />
						);
					})}
				</div>
			</div>					
    	</>
	);
}