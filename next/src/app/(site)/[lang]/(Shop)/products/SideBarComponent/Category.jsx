"use client"
export const Category = ({ items,assetsPath,mediaPath,local,Lang }) => {
	const counter = [26,36,43,27,40,40,40,43,36];
    return(
		<>
			<div className="widget widget_categories">
				<h6 className="widget-title">Category</h6>
				<ul>
					{items?.map((item, index)=>{
						return(
							<>
							
								<li className={"cat-item cat-item-"+counter[index]}><a href="blog-category.html">{item?.["title_"+local]}</a> {"("+item?.count_product+")"}</li>	
								<ul style={{marginLeft: "10px"}}>
									{item?.childs?.map((child,i)=>{
										return(
											<li className={"cat-item cat-item-"+counter[index]}><a href="blog-category.html">{child?.["title_"+local]}</a> {"("+child?.count_product+")"}</li>
										);
									})}
									
								</ul>
							</>
						);
					})}
					{/* <li className="cat-item cat-item-26"><a href="blog-category.html">Dresses</a> (10)</li>
					<li className="cat-item cat-item-36"><a href="blog-category.html">Top &amp; Blouses</a> (5)</li>
					<li className="cat-item cat-item-43"><a href="blog-category.html">Boots</a> (17)</li>
					<li className="cat-item cat-item-27"><a href="blog-category.html">Jewelry</a> (13)</li>
					<li className="cat-item cat-item-40"><a href="blog-category.html">Makeup</a> (06)</li> 
					<li className="cat-item cat-item-40"><a href="blog-category.html">Fragrances</a> (17)</li> 
					<li className="cat-item cat-item-40"><a href="blog-category.html">Shaving &amp; Grooming</a> (13)</li> 
					<li className="cat-item cat-item-43"><a href="blog-category.html">Jacket</a> (06)</li> 
					<li className="cat-item cat-item-36"><a href="blog-category.html">Coat</a> (22)</li>  */}
				</ul>
			</div>
    	</>
	);
}