"use client"

export const Category = ({ items, assetsPath, mediaPath, local, Lang, dispatch, state }) => {
	const counter = [26,36,43,27,40,40,40,43,36];
	const handleFilterLine = (lineId) => {
        dispatch({ type: 'SET_LINE', filter: lineId });
    };
	const handleFilterCategory = (categoryId) => {
        dispatch({ type: 'SET_CATEGORY', filter: categoryId });
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