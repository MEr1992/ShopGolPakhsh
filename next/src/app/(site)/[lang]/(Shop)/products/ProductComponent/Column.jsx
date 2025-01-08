"use client"
import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { ProductColumn } from "@/Theme/Site/Components/Cards/ProductColumn";

export const Column = ({ mediaPath,local,Lang,assetsPath }) => {
	const {state} = useContext(ProductContext);

    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-column" role="tabpanel" aria-labelledby="tab-list-column-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					{(state?.products?.data)?.map((item,index)=>{
						return(
							<ProductColumn item={item} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} index={index} />
						);
					})}
				</div>
			</div>			
    	</>
	);
}