export const MostVisited = ({assetsPath}) => {
	// console.log("assetsPath");
	// console.log(assetsPath);
    return(
		<>
			{/* Blockbuster deal Start */}
			<section className="content-inner-2 overflow-hidden">
				<div className="container">
					<div className="section-head style-1 wow fadeInUp d-lg-flex justify-content-between" data-wow-delay="0.2s">
						<div className="left-content">
							<h2 className="title">Blockbuster deals</h2>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See all deals 
							<i className="icon feather icon-chevron-right font-18"></i>
						</a>			
					</div>
					<div className="swiper swiper-four swiper-visible">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="shop-card style-2 wow fadeInUp" data-wow-delay="0.4s">
									<div className="dz-media">
										{/* <img src={`${assetsPath}/pixio/images/companies/logo1.png`} alt="image"/> */}
										<img src={`${assetsPath}/pixio/images/shop/product/shart/1.png`} alt="image"/>
									</div>
									<div className="dz-content">
										<div>
											<span className="sale-title">up to 79% off</span>
											<h5 className="title"><a href="shop-list.html">Printed Spread Collar Casual Shirt</a></h5>
										</div>
										<h6 className="price">
											$80
											<del>$95</del>
										</h6>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="shop-card style-2 wow fadeInUp" data-wow-delay="0.6s">
									<div className="dz-media">
										<img src={`${assetsPath}/pixio/images/shop/product/shart/2.png`} alt="image"/>
									</div>
									<div className="dz-content">
										<div>
											<span className="sale-title">up to 79% off</span>
											<h5 className="title"><a href="shop-list.html">Checkered Slim Collar Casual Shirt</a></h5>
										</div>
										<h6 className="price">
											$80
											<del>$95</del>
										</h6>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="shop-card style-2 wow fadeInUp" data-wow-delay="0.8s">
									<div className="dz-media">
										<img src={`${assetsPath}/pixio/images/shop/product/shart/3.png`} alt="image"/>
									</div>
									<div className="dz-content">
										<div>
											<span className="sale-title">up to 79% off</span>
											<h5 className="title"><a href="shop-list.html">Solid Cut Away Collar Casual Shirt</a></h5>
										</div>
										<h6 className="price">
											$80
											<del>$95</del>
										</h6>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="shop-card style-2 wow fadeInUp" data-wow-delay="1.0s">
									<div className="dz-media">
										<img src={`${assetsPath}/pixio/images/shop/product/shart/4.png`} alt="image"/>
									</div>
									<div className="dz-content">
										<div>
											<span className="sale-title">up to 79% off</span>
											<h5 className="title"><a href="shop-list.html">Printed Spread Collar Casual Shirt</a></h5>
										</div>
										<h6 className="price">
											$80
											<del>$95</del>
										</h6>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="shop-card style-2 wow fadeInUp" data-wow-delay="1.2s">
									<div className="dz-media">
										<img src={`${assetsPath}/pixio/images/shop/product/shart/5.png`} alt="image"/>
									</div>
									<div className="dz-content">
										<div>
											<span className="sale-title">up to 79% off</span>
											<h5 className="title"><a href="shop-list.html">Checkered Spread Collar Casual Shirt</a></h5>
										</div>
										<h6 className="price">
											$80
											<del>$95</del>
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Blockbuster deal Start */}
    	</>
	);
}