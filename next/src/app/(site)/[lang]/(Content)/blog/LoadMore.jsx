"use client"
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import React, { useContext } from 'react';
import { useData } from "@/Theme/Midone/Utils/Data";

export const LoadMore = ({ productId,assetsPath,mediaPath,local,Lang }) => {
	let { getNeedles } = useData();
	const {state} = useContext(BlogContext);

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