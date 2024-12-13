export const Brand = ({ items,mediaPath,Lang }) => {
	let items1 = items?.filter((item,i)=>i>=0 && i<=5);
	let items2 = items?.filter((item,i)=>i>=6 && i<=11);
	
    return(
		<>
			{/* company-box Start */}
			<section className="content-inner-3 companies-section overflow-hidden mt-5  mb-5">
				<div className="container">
					<div className="row justify-content-between align-items-end">
						<div className="col-lg-8 col-md-8 col-sm-12">
							<div className="section-head style-2 wow fadeInUp m-0" data-wow-delay="0.1s">
								<h2 className="title text-white">{Lang("public.We’re just keep growing  with 6.3k trusted companies")}</h2>
							</div>	
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12 text-md-center m-b30 wow fadeInUp" data-wow-delay="0.2s">	
							<a className="icon-button d-md-inline-block d-none" href="blog-tag.html">
								<div className="text-row word-rotate-box c-black border-secondary bg-secondary">
									<span className="word-rotate">{Lang(["public.partner"," - ","public.partner"," - "])}</span>
									<svg className="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
										<path d="M85.9974 27.7066L78.4547 15.2934L50.56 30.5869V0H35.44V30.5869L7.54534 15.2934L0 27.7066L27.9018 43L0.00212688 58.2934L7.5451 70.7066L35.44 55.4131V86H50.56V55.4131L78.4544 70.7066L86 58.2934L58.0982 43L85.9974 27.7066Z" fill="#FAFAF8"/>
									</svg>
								</div>
							</a>
						</div>	
					</div>
				</div>	
				<div className="container-fluid">
					<div className="tag-slider style-1 wow fadeInUp" data-wow-delay="0.2s" id="tagSlider">
						<div className="item-wrap">
							{items1?.map((item, i)=>{
								return(
									<div className="item">
										<a href="javascript:void(0);" className="companies-wrapper">
											<div className="companies-media">
												<img src={mediaPath+"/brand/"+item?.logo} alt="" /> 
											</div>
										</a>
									</div>
								);
							})}
						</div>
					</div>
					<div className="tag-slider wow fadeInUp" data-wow-delay="0.4s" id="tagSlider2">
						<div className="item-wrap">	
							{items2?.map((item, i)=>{
								return(
									<div className="item">
										<a href="javascript:void(0);" className="companies-wrapper">
											<div className="companies-media">
												<img src={mediaPath+"/brand/"+item?.logo} alt="" /> 
											</div>
										</a>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>	
			{/* company-box End */}
    	</>
	);
}