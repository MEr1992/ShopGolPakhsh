"use client"
export const ProductGrid = ({ item,assetsPath,mediaPath,local,Lang }) => {
		// 9

    return(
		<>
			<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
				<div className="shop-card style-1">
					<div className="dz-media">
						<img src={mediaPath+"/product/"+item?.image} alt="image"/>
						<div className="shop-meta">
							<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
								<i className="fa-solid fa-eye d-md-none d-block"></i>
								<span className="d-md-block d-none">{Lang("public.Quick View")}</span>
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
						<h5 className="title"><a href="shop-list.html">{item?.name}</a></h5>
						<h5 className="price">{item?.price}</h5>
					</div>
					<div className="product-tag">
						<span className="badge ">Get {item?.discount+"%"} Off</span>
					</div>
				</div>
			</div>	
    	</>
	);
}