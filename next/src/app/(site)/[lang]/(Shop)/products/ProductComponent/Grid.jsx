"use client"
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const Grid = ({ items,mediaPath,local,Lang }) => {
    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-grid" role="tabpanel" aria-labelledby="tab-list-grid-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					{items?.map((item,index)=>{
						return(
							<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30" key={index}>
								<ProductGrid item={item} mediaPath={mediaPath} local={local} Lang={Lang} />
							</div>	
						);
					})}
				</div>
			</div>
    	</>
	);
}