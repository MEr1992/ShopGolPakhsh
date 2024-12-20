"use client"
export const Keywords = ({ items,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget widget_tag_cloud">
				<h6 className="widget-title">{Lang("public.tags")}</h6>
				<div className="tagcloud">
					{items?.map((item, i)=>{
						return(
							<a href="blog-tag.html">Vintage </a>
						);
					})}
				</div>
			</div>
    	</>
	);
}