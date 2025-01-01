"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/app/(site)/[lang]/PageTools/Context/ProductContext';

export const Category = ({ items, assetsPath, mediaPath, local, Lang }) => {
	const counter = [26,36,43,27,40,40,40,43,36];
	const { category,line } = useContext(ProductContext);
	const handleFilterLine = (lineId) => {
		line(lineId)
    };
	const handleFilterCategory = (categoryId) => {
		category(categoryId)
    };
	
    return(
		<>
			<div className="widget widget_categories">
				<h6 className="widget-title">{Lang("public.category")}</h6>
				<ul>
					{items?.map((item,index)=>{
						return(
							<>
								<li className={"title cat-item cat-item-"+counter[index]}>
									<a href="javascript:void(0);" onClick={()=>handleFilterLine(item?.id)}>{item?.["title_"+local]}</a>
									{"("+item?.count_product+")"}
								</li>		
								<ul style={{marginLeft: "10px"}} key={index}>
									{item?.childs?.map((child,i)=>{
										return(
											<li className={"cat-item cat-item-"+counter[index]} key={i}>
												<a href="javascript:void(0);" onClick={()=>handleFilterCategory(child?.id)} >{child?.["title_"+local]}</a>
												{"("+child?.count_product+")"}
											</li>
										);
									})}
									
								</ul>
							</>
						);
					})}
				</ul>
			</div>
    	</>
	);
};