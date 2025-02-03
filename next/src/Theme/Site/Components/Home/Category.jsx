import { useEffect } from "react";

export const Category = ({ items,mediaPath,assetsPath,local,Lang }) => {
	let delay = "0.2";
	let classDiv = ["col-xl-4","col-xl-3","col-xl-5","col-xl-4","col-xl-5","col-xl-3"];
	

    return(
		<>
			{/* Featured Section Start */}
			<div className="content-inner category-section">
				<div className="container">
					<div className="row gx-xl-4 g-3">
						{items?.map((item, index)=>{
							delay = parseFloat(delay+0.1);
							let delayNew = delay+"s";
							let i = index+1;
							let classDivNew = classDiv[index];
							let classDir = (i<=3)? "left" : "right";
							if(i<=6)
								return(
									<div class={classDivNew+" col-lg-4 col-md-4 col-6 wow fadeInUp"} data-wow-delay={delayNew} key={index}>
										<div class={`category-product ${classDir} product-${i}`}>
											<a href={`/${local}/products?line=${item?.id}`}>								
												<img src={mediaPath+"/category/"+item?.image} alt=""/>
												<div className="category-badge">{item?.["title_"+local]}</div>
											</a>
										</div>
									</div>
								);
						})}
					</div>
				</div>
				<a className="icon-button" href="shop-with-category.html">
					<div className="text-row word-rotate-box c-black border-white">
						<span className="word-rotate">{Lang("public.rotating_category")}</span>
						<svg className="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<g clip-path="url(#clip0_161_568)">
							<path d="M10.7239 31.3072L19.0059 39.5891C19.2696 39.8523 19.627 40.0001 19.9995 40.0001C20.3721 40.0001 20.7295 39.8523 20.9932 39.5891L29.2752 31.3072C29.4582 31.1236 29.5608 30.8748 29.5606 30.6156C29.5604 30.3564 29.4573 30.1078 29.274 29.9245C29.0907 29.7412 28.8421 29.6381 28.5829 29.6379C28.3237 29.6377 28.075 29.7404 27.8913 29.9234L20.9781 36.8368V0.978516C20.9781 0.718997 20.875 0.470108 20.6915 0.286601C20.508 0.103093 20.2591 0 19.9995 0C19.74 0 19.4911 0.103093 19.3076 0.286601C19.1241 0.470108 19.021 0.718997 19.021 0.978516V36.8368L12.1077 29.9234C11.9241 29.7404 11.6754 29.6377 11.4162 29.6379C11.1569 29.6381 10.9084 29.7412 10.7251 29.9245C10.5418 30.1078 10.4387 30.3564 10.4385 30.6156C10.4383 30.8748 10.5409 31.1236 10.7239 31.3072Z" fill="#000"/>
							</g>
							<defs>
							<clipPath id="clip0_161_568">
								<rect width="40" height="40" fill="#000"/>
							</clipPath>
							</defs>
						</svg>
					</div>
				</a>
			</div>	
			{/* Featured Section End */}
    	</>
	);
}