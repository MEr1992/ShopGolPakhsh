"use client"
import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";

export const Banner = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			{/* Banner Start */}
			<div className="dz-bnr-inr bg-secondary overlay-black-light" style={{backgroundImage:`url(${assetsPath}/pixio/images/background/bg1.jpg)`}}>
				<div className="container">
					<div className="dz-bnr-inr-entry">
						<h1>{Lang("public.products")}</h1>
						<BreadCrumb />
						{/* <nav aria-label="breadcrumb" className="breadcrumb-row">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html"> {Lang("public.home")}</a></li>
								<li className="breadcrumb-item">{Lang("public.products")}</li>
							</ul>
						</nav> */}
					</div>
				</div>	
			</div>
			{/* Banner End */}
    	</>
	);
}