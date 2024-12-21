"use client"
export const Banner = ({ Lang }) => {
	
    return(
		<>
			{/* Banner Start */}
			<div className="dz-bnr-inr bg-secondary overlay-black-light" style={{backgroundImage:`url(images/background/bg1.jpg)`}}>
				<div className="container">
					<div className="dz-bnr-inr-entry">
						<h1>{Lang("public.Shop Sidebar")}</h1>
						<nav aria-label="breadcrumb" className="breadcrumb-row">
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html"> Home</a></li>
								<li className="breadcrumb-item">Shop Sidebar</li>
							</ul>
						</nav>
					</div>
				</div>	
			</div>
			{/* Banner End */}
    	</>
	);
}