"use client"
export const List = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="tab-pane fade" id="tab-list-list" role="tabpanel" aria-labelledby="tab-list-list-btn">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div className="dz-shop-card style-2">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/1.png"} alt="image"/>
							</div>
							<div className="dz-content">
								<div className="dz-header">
									<div>
										<h4 className="title mb-0"><a href="shop-with-category.html">Stylish Fedora Hat Collection</a></h4>
										<ul className="dz-tags">
											<li><a href="shop-with-category.html">Accessories,</a></li>
											<li><a href="shop-with-category.html">Sunglasses</a></li>
										</ul>
									</div>
									<div className="review-num">
										<ul className="dz-rating">
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>										
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
										</ul>
										<span><a href="javascript:void(0);"> 370 Review</a></span>
									</div>
								</div>
								<div className="dz-body">
									<div className="dz-rating-box">
										<div>
											<p className="dz-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
										</div>
									</div>
									<div className="rate">
										<div className="d-flex align-items-center mb-xl-3 mb-2">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price">$40.00</span>
											</div>
											<div className="meta-content">
												<span className="color-name">Color</span>
												<div className="d-flex align-items-center color-filter">
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel11" value="#24262B" aria-label="..." checked=""/>
														<span style={{backgroundColor: "rgb(36, 38, 43)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel12" value="#8CB2D1" aria-label="..."/>
														<span style={{backgroundColor: "rgb(140, 178, 209)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel13" value="#0D775E" aria-label="..."/>
														<span style={{backgroundColor: "rgb(13, 119, 94)"}}></span>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex">
											<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
												<i className="icon feather icon-shopping-cart d-md-none d-block"></i>
												<span className="d-md-block d-none">Add to cart</span>
											</a>
											<div className="bookmark-btn style-1">
												<input className="form-check-input" type="checkbox" id="favoriteCheck1"/>
												<label className="form-check-label" for="favoriteCheck1">
													<i className="fa-solid fa-heart"></i>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className="dz-shop-card style-2">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/5.png"} alt="image"/>
							</div>
							<div className="dz-content">
								<div className="dz-header">
									<div>
										<h4 className="title mb-0"><a href="shop-with-category.html">Sophisticated Swagger Suit</a></h4>
										<ul className="dz-tags">
											<li><a href="shop-with-category.html">Accessories,</a></li>
											<li><a href="shop-with-category.html">Sunglasses</a></li>
										</ul>
									</div>
									<div className="review-num">
										<ul className="dz-rating">
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>										
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
										</ul>
										<span><a href="javascript:void(0);"> 255 Review</a></span>
									</div>
								</div>
								<div className="dz-body">
									<div className="dz-rating-box">
										<div>
											<p className="dz-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
										</div>
									</div>
									<div className="rate">
										<div className="d-flex align-items-center mb-xl-3 mb-2">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price">$55.00</span>
											</div>
											<div className="meta-content">
												<span className="color-name">Color</span>
												<div className="d-flex align-items-center color-filter">
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel14" value="#24262B" aria-label="..." checked=""/>
														<span style={{backgroundColor: "rgb(36, 38, 43)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel15" value="#8CB2D1" aria-label="..."/>
														<span style={{backgroundColor: "rgb(140, 178, 209)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel16" value="#0D775E" aria-label="..."/>
														<span style={{backgroundColor: "rgb(13, 119, 94)"}}></span>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex">
											<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
												<i className="icon feather icon-shopping-cart d-md-none d-block"></i>
												<span className="d-md-block d-none">Add to cart</span>
											</a>
											<div className="bookmark-btn style-1">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault2"/>
												<label className="form-check-label" for="flexCheckDefault2">
													<i className="fa-solid fa-heart"></i>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className="dz-shop-card style-2">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/3.png"} alt="image"/>
							</div>
							<div className="dz-content">
								<div className="dz-header">
									<div>
										<h4 className="title mb-0"><a href="shop-with-category.html">Retro Sunglasses Collection</a></h4>
										<ul className="dz-tags">
											<li><a href="shop-with-category.html">Accessories,</a></li>
											<li><a href="shop-with-category.html">Sunglasses</a></li>
										</ul>
									</div>
									<div className="review-num">
										<ul className="dz-rating">
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>										
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
										</ul>
										<span><a href="javascript:void(0);"> 455 Review</a></span>
									</div>
								</div>
								<div className="dz-body">
									<div className="dz-rating-box">
										<div>
											<p className="dz-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
										</div>
									</div>
									<div className="rate">
										<div className="d-flex align-items-center mb-xl-3 mb-2">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price">$56.00</span>
											</div>
											<div className="meta-content">
												<span className="color-name">Color</span>
												<div className="d-flex align-items-center color-filter">
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel17" value="#24262B" aria-label="..." checked=""/>
														<span style={{backgroundColor: "rgb(36, 38, 43)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel18" value="#8CB2D1" aria-label="..."/>
														<span style={{backgroundColor: "rgb(140, 178, 209)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel19" value="#0D775E" aria-label="..."/>
														<span style={{backgroundColor: "rgb(13, 119, 94)"}}></span>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex">
											<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
												<i className="icon feather icon-shopping-cart d-md-none d-block"></i>
												<span className="d-md-block d-none">Add to cart</span>
											</a>
											<div className="bookmark-btn style-1">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault3"/>
												<label className="form-check-label" for="flexCheckDefault3">
													<i className="fa-solid fa-heart"></i>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-sm-12">
						<div className="dz-shop-card style-2">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/5.png"} alt="image"/>					
							</div>
							<div className="dz-content">
								<div className="dz-header">
									<div>
										<h4 className="title mb-0"><a href="shop-with-category.html">Stylish Fedora Hat Collection</a></h4>
										<ul className="dz-tags">
											<li><a href="shop-with-category.html">Accessories,</a></li>
											<li><a href="shop-with-category.html">Sunglasses</a></li>
										</ul>
									</div>
									<div className="review-num">
										<ul className="dz-rating">
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>										
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li className="star-fill">
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
											<li>
												<i className="flaticon-star-1"></i>
											</li>
										</ul>
										<span><a href="javascript:void(0);"> 370 Review</a></span>
									</div>
								</div>
								<div className="dz-body">
									<div className="dz-rating-box">
										<div>
											<p className="dz-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
										</div>
									</div>
									<div className="rate">
										<div className="d-flex align-items-center mb-xl-3 mb-2">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price">$80.00</span>
											</div>
											<div className="meta-content">
												<span className="color-name">Color</span>
												<div className="d-flex align-items-center color-filter">
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel21" value="#24262B" aria-label="..." checked=""/>
														<span style={{backgroundColor: "rgb(36, 38, 43)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel22" value="#8CB2D1" aria-label="..."/>
														<span style={{backgroundColor: "rgb(140, 178, 209)"}}></span>
													</div>
													<div className="form-check">
														<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel23" value="#0D775E" aria-label="..."/>
														<span style={{backgroundColor: "rgb(13, 119, 94)"}}></span>
													</div>
												</div>
											</div>
										</div>
										<div className="d-flex">
											<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
												<i className="icon feather icon-shopping-cart d-md-none d-block"></i>
												<span className="d-md-block d-none">Add to cart</span>
											</a>
											<div className="bookmark-btn style-1">
												<input className="form-check-input" type="checkbox" id="flexCheckDefault4"/>
												<label className="form-check-label" for="flexCheckDefault4">
													<i className="fa-solid fa-heart"></i>
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>					
    	</>
	);
}