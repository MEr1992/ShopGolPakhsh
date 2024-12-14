"use client"
export const Keywords = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget widget_tag_cloud">
				<h6 className="widget-title">Tags</h6>
				<div className="tagcloud"> 
					<a href="blog-tag.html">Vintage </a>
					<a href="blog-tag.html">Wedding</a>
					<a href="blog-tag.html">Cotton</a>
					<a href="blog-tag.html">Linen</a>
					<a href="blog-tag.html">Navy</a>
					<a href="blog-tag.html">Urban</a>
					<a href="blog-tag.html">Business Meeting</a>
					<a href="blog-tag.html">Formal</a>
				</div>
			</div>
    	</>
	);
}