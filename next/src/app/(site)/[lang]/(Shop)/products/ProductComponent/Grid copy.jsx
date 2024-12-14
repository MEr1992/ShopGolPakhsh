"use client"
export const Grid = ({ items,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-grid" role="tabpanel" aria-labelledby="tab-list-grid-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/1.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Cozy Knit Cardigan Sweater</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/2.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Sophisticated Swagger Suit</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/3.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Classic Denim Skinny Jeans</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/4.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Athletic Mesh Sports Leggings</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/5.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Vintage Denim Overalls Shorts</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>	
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/6.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Satin Wrap Party Blouse</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/7.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Plaid Wool Winter Coat</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/8.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Water-Resistant Windbreaker Jacket</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
					<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
						<div className="shop-card style-1">
							<div className="dz-media">
								<img src={assetsPath+"/pixio/images/shop/product/9.png"} alt="image"/>
								<div className="shop-meta">
									<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
										<i className="fa-solid fa-eye d-md-none d-block"></i>
										<span className="d-md-block d-none">Quick View</span>
									</a>
									<div className="btn btn-primary meta-icon dz-wishicon">
										<i className="icon feather icon-heart dz-heart"></i>
										<i className="icon feather icon-heart-on dz-heart-fill"></i>
									</div>
									<div className="btn btn-primary meta-icon dz-carticon">
										<i className="flaticon flaticon-basket"></i>
										<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
									</div>
								</div>							
							</div>
							<div className="dz-content">
								<h5 className="title"><a href="shop-list.html">Comfy Lounge Jogger Pants</a></h5>
								<h5 className="price">$80</h5>
							</div>
							<div className="product-tag">
								<span className="badge ">Get 20% Off</span>
							</div>
						</div>
					</div>
				</div>
			</div>
    	</>
	);
}