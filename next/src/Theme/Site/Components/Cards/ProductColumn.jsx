"use client"
export const ProductColumn = ({ assetsPath,mediaPath }) => {
		// 4

    return(
		<>
			<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
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
    	</>
	);
}