"use client"
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const Grid = ({ items,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-grid" role="tabpanel" aria-labelledby="tab-list-grid-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					{items?.map((item, index)=>{
						return(
							<ProductGrid item={item} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
						);
					})}
				</div>
			</div>
    	</>
	);
}