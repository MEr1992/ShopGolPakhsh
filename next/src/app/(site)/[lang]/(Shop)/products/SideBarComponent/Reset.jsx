"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const Reset = ({ Lang }) => {
	const { dispatch } = useContext(ProductContext);
	const handleReset = () => {
		dispatch('RESET');
	};

    return(
		<>
			<a href="javascript:void(0);" className="btn btn-sm font-14 btn-secondary btn-sharp" onClick={handleReset}>
				{Lang("public.reset_title_btn")}
			</a>
    	</>
	);
}