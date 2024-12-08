export const Line = ({assetsPath}) => {
	// console.log("assetsPath");
	// console.log(assetsPath);
    return(
		<>
			{/* Offer Section Start */}
			<section className="content-inner-2">
				<div className="container">	
					<div className="section-head style-1 wow fadeInUp d-flex justify-content-between m-b30" data-wow-delay="0.2s">
						<div className="left-content">
							<h2 className="title">Featured offer for you</h2>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See All 
							<i className="icon feather icon-chevron-right font-18"></i>
						</a>			
					</div>
				</div>
				<div className="container-fluid px-3">
					<div className="swiper swiper-product">
						<div className="swiper-wrapper product-style2">
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.4s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/1.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">20% Off</span>
											<h2 className="product-name">Luxury Bras</h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.6s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/2.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">Sale Up to 50% Off</span>
											<h2 className="sub-title1">Summer <span className="year">2024</span></h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.8s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/3.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">20% Off</span>
											<h2 className="sub-title2">Swimwear<span className="bg-title">Sale</span></h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.0s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/1.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">20% Off</span>
											<h2 className="product-name">Luxury Bras</h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.2s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/2.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">Sale Up to 50% Off</span>
											<h2 className="sub-title1">Summer <span className="year">2024</span></h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.4s">
									<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/3.png`}}></div>
									<div className="product-content">
										<div className="main-content">
											<span className="offer">20% Off</span>
											<h2 className="sub-title2">Swimwear<span className="bg-title">Sale</span></h2>
											<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Product End */}
    	</>
	);
}