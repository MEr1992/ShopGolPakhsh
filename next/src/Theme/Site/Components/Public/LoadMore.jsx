"use client"
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import React, { useContext } from 'react';
import { useData } from "@/Theme/Midone/Utils/Data";

export const LoadMore = ({ productId,assetsPath,mediaPath,local,Lang }) => {
	let { getNeedles } = useData();
	const {state} = useContext(ProductContext);
	const addToCart = (id)=>{		
		// بررسی وجود کلاس active
		if($('#cart-active-'+id).hasClass('active'))
		{
			alert("شما قبلا محصول مورد نظر را به سبد خرید خود اضافه کرده اید.")
		}
		else
		{
			getNeedles(`${local}${state.laralelUrl}/add-to-cart/${id}`, "");
			jQuery('#cart-active-'+id).toggleClass('active');
		}
	}

    return(
		<>
			<div className="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.7s">
				<a href="blog-dark-half-image.html" className="btn btn-secondary">
					{Lang("public.load_more")}
				</a>
			</div>
		</>
	);
}