"use client"
export const Price = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget">
				<h6 className="widget-title">Price</h6>
				<div className="price-slide range-slider">
					<div className="price">
						<div className="range-slider style-1">
							<div id="slider-tooltips2" className="mb-3"></div>
							<span className="example-val" id="slider-margin-value-min2"></span>
							<span className="example-val" id="slider-margin-value-max2"></span>
						</div>
					</div>
				</div>
			</div>
    	</>
	);
}