export const Slider = ({ items,mediaPath,assetsPath,Lang,local }) => {
		
    return(
		<>
			{/* Swiper Banner Start */}
			<div className="main-slider style-2"> 
				<div className="main-swiper2">
					<div className="container">
						<div className="banner-content">
							<div className="row">
								<div className="col-xl-7 col-lg-7 col-md-12 align-self-center">
									<div className="swiper-content">
										<div className="content-info">
											<h1 className="offer-title mb-0" data-swiper-parallax="-20">{items?.[0]?.title} <span className="text-primary d-flex align-items-center"><svg className="m-r10" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
												<path d="M34 0L43.6167 24.3833L68 34L43.6167 43.6167L34 68L24.3833 43.6167L0 34L24.3833 24.3833L34 0Z" fill="var(--primary)"/>
											</svg> {items?.[0]?.title_2}</span>{items?.[0]?.title_3}</h1>
											<p className="sub-title mb-0" data-swiper-parallax="-40">{items?.[0]?.text}</p>												
										</div>
										<div className="content-btn" data-swiper-parallax="-60">
											<a className="btn btn-secondary  me-3" href="shop-cart.html">ADD TO CART</a>
											<a className="btn btn-outline-secondary" href="shop-standard.html">VIEW DETAILS</a>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-5 col-md-12">
									<div className="banner-media">
										<div className="shap"></div>
										<div className="border-shap"></div>
										<div className="border-shap2"></div>

										<div className="img-preview" data-swiper-parallax="-100">
											{/* <img src="images/main-slider/slider2/pic1.png" alt="banner-media"/> */}
											{/* <img src={assetsPath+"images/main-slider/slider2/pic1.png"} alt="banner-media"/> */}
											<img src={mediaPath+"/slider/"+items?.[0]?.image} alt="banner-media"/>
										</div>
										<div className="bnr-content-bx slideskew">
											<div className="dz-media">
												<img src={assetsPath+"/pixio/images/shop/product/small/1.png"} alt=""/>
											</div>
											<div className="dz-info">
												<h5 className="dz-title">Cozy Knit Cardigan</h5>
												<h6 className="price text-primary">$80</h6>
												<div className="btn btn-primary meta-icon dz-carticon">
													<i className="flaticon flaticon-basket"></i>
													<i className="flaticon flaticon-basket-on dz-heart-fill"></i>
												</div>
											</div>
										</div>
										<div className="bnr-customer-bx slideskew">
											<i className="icon feather icon-heart-on dz-heart"></i>
											<ul>
												<li className="customer-image">
													<img src={assetsPath+"/pixio/images/testimonial/testimonial1.jpg"} alt=""/>
												</li>
												<li className="customer-image">
													<img src={assetsPath+"/pixio/images/testimonial/testimonial2.jpg"} alt=""/>
												</li>
												<li className="customer-image">
													<img src={assetsPath+"/pixio/images/testimonial/testimonial3.jpg"} alt=""/>
												</li>
											</ul>
										</div>
										<ul className="star-list">
											<li className="star-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
													<path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z" fill="var(--rgba-primary-2)"/>
												</svg>
											</li>
											<li className="star-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
													<path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z" fill="var(--rgba-primary-2)"/>
												</svg>
											</li>
											<li className="star-3">
												<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
													<path d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z" fill="var(--rgba-primary-2)"/>
												</svg>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="banner-social-media style-2 left">
						<ul>
							<li>
								<a href="../../https@www.instagram.com/dexignzone/default.htm" target="_blank">Instagram</a>
							</li>
							<li>
								<a href="../../https@www.facebook.com/dexignzone" target="_blank">Facebook</a>
							</li>
							<li>
								<a href="../../https@twitter.com/dexignzones" target="_blank">twitter</a>
							</li>
						</ul>
					</div>
					<a href="contact-us-2.html" className="service-btn btn-dark">Let’s talk</a>
				</div>
			</div>		
			{/* Swiper Banner End */}
    	</>
	);
}