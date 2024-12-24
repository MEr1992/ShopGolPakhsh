"use client"
import { Category,Color,Keywords,Price,Search,Size } from "@/app/(site)/[lang]/(Shop)/products/SideBarComponent";

export const SideBar = ({ categories,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="col-xl-3 col-lg-12">
				<div className="sticky-xl-top">
					<a href="javascript:void(0);" className="panel-close-btn">																	
						<svg width="35" height="35" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M37.748 12.5L12.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M12.748 12.5L37.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
					<div className="shop-filter mt-xl-2 mt-0">
						<aside>
							<div className="d-flex align-items-center justify-content-between m-b30">
								<h6 className="title mb-0 fw-normal d-flex">
									<i className="flaticon-filter me-3"></i>
									{Lang("public.filter")}
								</h6>
							</div>
							<Search Lang={Lang} />
							<Price Lang={Lang} />
							{/* <Color />
							<Size /> */}
							<Category items={categories} local={local} Lang={Lang} />
							<Keywords items={categories} Lang={Lang} />
							<a href="javascript:void(0);" className="btn btn-sm font-14 btn-secondary btn-sharp">RESET</a>
						</aside>
					</div>
				</div>
			</div>			
    	</>
	);
}