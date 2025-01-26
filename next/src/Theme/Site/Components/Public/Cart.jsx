"use client"
export const Cart = ({ item,assetsPath,mediaPath,local,Lang }) => {
    return(
		<>
			<div className="btn btn-primary meta-icon dz-carticon">
				<i className="flaticon flaticon-basket"></i>
				<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
			</div>
    	</>
	);
}