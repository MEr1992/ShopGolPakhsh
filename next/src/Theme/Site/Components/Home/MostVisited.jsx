export const MostVisited = ({ items,mediaPath,local,Lang }) => {
	let delay = "0.2";

    return(
		<>
			{/* Blockbuster deal Start */}
			<section className="content-inner-2 overflow-hidden">
				<div className="container">
					<div className="section-head style-1 wow fadeInUp d-lg-flex justify-content-between" data-wow-delay="0.2s">
						<div className="left-content">
							{/* <h2 className="title">{Lang("public.Blockbuster deals")}</h2> */}
							<h2 className="title">{Lang("public.Most popular products")}</h2>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See all deals 
							<i className="icon feather icon-chevron-right font-18"></i>
						</a>			
					</div>
					<div className="swiper swiper-four swiper-visible">
						<div className="swiper-wrapper">
							{items?.map((item, i)=>{
								delay = parseFloat(delay+0.2);
								let delayNew = delay+"s";
								let classSpan = "text-success";
								let displayDiscount = Lang("public.Free delivery");
								let displayPrice = <> {"$"+item?.price} </>
								if(item?.discount>0)
								{
									classSpan = "";
									displayDiscount = <>{Lang("public.up to")+" "+item?.discount+"%"+Lang("public.off")}</>;
									displayPrice = <>
										{"$"+item?.discount_price}
										<del>{"$"+item?.price}</del>
									</>
								}
								return(
									<div className="swiper-slide">
										<div className="shop-card style-2 wow fadeInUp" data-wow-delay={delayNew}>
											<div className="dz-media">
												<img src={mediaPath+"/product/"+item?.image} alt="image"/>
											</div>
											<div className="dz-content">
												<div>
													<span className="sale-title">{displayDiscount}</span>
													<h5 className="title"><a href="shop-list.html">{item?.name}</a></h5>
												</div>
												<h6 className="price">{displayPrice}</h6>
											</div>
										</div>
									</div>
								);
							})}
							</div>
					</div>
				</div>
			</section>
			{/* Blockbuster deal Start */}
    	</>
	);
}