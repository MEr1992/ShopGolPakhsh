"use client"
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";

export const ProductGrid = ({ item,assetsPath,mediaPath,local,Lang }) => {

    return(
		<>
			<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30">
				<div className="shop-card style-1">
					<div className="dz-media">
						<img src={mediaPath+"/product/"+item?.image} alt="image"/>
						<div className="shop-meta">
							<QuickView Lang={Lang} />
							<Like Lang={Lang} />
							<Cart Lang={Lang} />
						</div>							
					</div>
					<div className="dz-content">
						<h5 className="title"><a href="shop-list.html">{item?.name}</a></h5>
						<h5 className="price">{item?.price}</h5>
					</div>
					<div className="product-tag">
						<span className="badge ">{item?.category?.["title_"+local]}</span>
					</div>
				</div>
			</div>	
    	</>
	);
}