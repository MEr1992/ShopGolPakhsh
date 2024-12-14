export const Line = ({ items,mediaPath,local,Lang }) => {
	let delay = "0.2";

    return(
		<>
			{/* Offer Section Start */}
			<section className="content-inner-2">
				<div className="container">	
					<div className="section-head style-1 wow fadeInUp d-flex justify-content-between m-b30" data-wow-delay="0.2s">
						<div className="left-content">
							<h2 className="title">{Lang("public.Our Line For You")}</h2>
							{/* <h2 className="title">{Lang("public.Featured offer for you")}</h2> */}
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See All 
							<i className="icon feather icon-chevron-right font-18"></i>
						</a>			
					</div>
				</div>
				<div className="container-fluid px-3">
					<div className="swiper swiper-product">
						<div className="swiper-wrapper product-style2">
							{items?.map((item, i)=>{
								delay = parseFloat(delay+0.2);
								let delayNew = delay+"s";
								// let classH = "product-name";
								// if(i==1) classH = "sub-title1";
								// if(i==2) classH = "sub-title2";

								return(
									<div className="swiper-slide">
										<div className="product-box style-2 wow fadeInUp" data-wow-delay={delayNew}>
											<div className="product-media" style={{backgroundImage: `url(${mediaPath}/line/${item?.image}`}}></div>
											<div className="product-content">
												<div className="main-content">
													<span className="offer">20% Off</span>
													<h2 className="product-name">{item?.["title_"+local]}</h2>
													<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">{Lang("public.Collect Now")}</a>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* Product End */}
    	</>
	);
}