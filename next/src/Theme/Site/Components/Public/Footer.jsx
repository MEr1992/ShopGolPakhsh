import Link from "next/link";
import Script from 'next/script'
import { useLang } from "@/lib";

export const Footer = ({ data,assetsPath,mediaPath,local }) => {
	const { Lang } = useLang();

	let parentCategories = data?.categories?.filter((category)=>category?.parent_id>1);
	let categories = data?.categories?.filter((category)=>category?.parent_id>1);
	let brands = data?.brands;
	let subjects = data?.subjects;

	return(
		<>
		    <button className="scroltop" type="button"><i className="fas fa-arrow-up"></i></button>	
			{/* Footer */}
			<footer className="site-footer footer-dark style-3">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-lg-4 col-md-12 px-0">
							<div className="row dz-post g-0 spno">
								<div className="col-lg-6 col-6">
									<div className="dz-post-media">
										<img src={assetsPath+"/pixio/images/posts/pic1.png"} alt=""/>
									</div>
								</div>
								<div className="col-lg-6 col-6">
									<div className="dz-post-media">
										<img src={assetsPath+"/pixio/images/posts/pic2.png"} alt=""/>
									</div>
								</div>
								<div className="col-lg-6  col-6">	
									<div className="dz-post-media">
										<img src={assetsPath+"/pixio/images/posts/pic3.png"} alt=""/>
									</div>
								</div>
								<div className="col-lg-6 col-6">
									<div className="dz-post-media">
										<img src={assetsPath+"/pixio/images/posts/pic4.png"} alt=""/>
									</div>
								</div>
								<a href="javascript:void(0);" className="instagram-link">
									<div className="follow-link bg-white wow bounceIn" data-wow-delay="0.1s">
										<div className="follow-link-icon">
											<img src={assetsPath+"/pixio/images/insta-follow.png"} alt=""/>
										</div>
										<div className="follow-link-content">
											<h4>Share with #Pixio</h4>
											<p>Follow @Pixio for inspiration.</p>
										</div>
									</div>
								</a>	
							</div>
						</div>
						<div className="col-md-8 col-lg-8 col-md-12">
							<div className="footer-top">
								<div className="dz-custom-container">
									<div className="row align-items-center logo-topbar gx-0 wow fadeInUp" data-wow-delay="0.1s">
										<div className="col-12 col-sm-6">
											<div className="footer-logo logo-white mb-0">
												<a href="index.html"><img src={assetsPath+"/pixio/images/logo-white.svg"} alt=""/></a> 
											</div>	
										</div>
										<div className="col-12 col-sm-6">
											<div className="dz-social-icon style-1">
												<ul>
													<li>
														<a href="https://www.facebook.com/dexignzone" target="_blank">
															<i className="fa-brands fa-facebook-f"></i>
														</a>
													</li>
													<li>
														<a href="https://twitter.com/dexignzones" target="_blank">
															<i className="fa-brands fa-twitter"></i>
														</a>
													</li>
													<li>
														<a href="https://www.linkedin.com/showcase/3686700/admin/" target="_blank">
															<i className="fa-brands fa-linkedin"></i>
														</a>
													</li>
													<li>
														<a href="https://www.instagram.com/dexignzone/" target="_blank">
															<i className="fa-brands fa-instagram"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
											<div className="widget widget_services">
												<h5 className="footer-title">{Lang("public.category_product")}</h5>
												<ul>
													{categories?.map((category, index)=>{
														return(
															<li><a href="javascript:void(0);">{category?.["title_"+local]}</a></li>
														);
													})}
												</ul>   
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
											<div className="widget widget_services">
												<h5 className="footer-title">{Lang("public.brand")}</h5>
												<ul>
													{brands?.map((brand, index)=>{
														return(
															<li><a href="javascript:void(0);">{brand?.["name_"+local]}</a></li>
														);
													})}
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-4 col-12 wow fadeInUp" data-wow-delay="0.4s">
											<div className="widget widget_services">
												<h5 className="footer-title">{Lang("public.subject_blog")}</h5>
												<ul>
													{subjects?.map((subject, index)=>{
														return(
															<li><a href="javascript:void(0);">{subject?.["title_"+local]}</a></li>
														);
													})}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="footer-bottom wow fadeInUp" data-wow-delay="0.5s">
								<div className="fb-inner">
									<div className="text-center"> 
										<p className="copyright-text">© <span className="current-year">2024</span> <a href="https://www.dexignzone.com/">DexignZone</a> Theme. All Rights Reserved.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
						
			{/* Footer End */}

			{/* <Script id='jquery.min.js' src={assetsPath + '/pixio/js/jquery.min.js'} strategy='afterInteractive' /> */}
			<Script src={`${assetsPath}/pixio/vendor/wow/wow.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap/dist/js/bootstrap.bundle.min.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-select/dist/js/bootstrap-select.min.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-touchspin/bootstrap-touchspin.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/swiper/swiper-bundle.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/magnific-popup/magnific-popup.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/imagesloaded/imagesloaded.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/masonry/masonry-4.2.2.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/masonry/isotope.pkgd.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/countdown/jquery.countdown.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/wnumb/wNumb.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/nouislider/nouislider.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/slick/slick.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/lightgallery.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/group-slide/group-loop.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/js/dz.carousel.js`} strategy='afterInteractive' />
			{/* <Script src={`${assetsPath}/pixio/js/dz.ajax.js`} strategy='afterInteractive' /> */}
			<Script src={`${assetsPath}/pixio/js/custom.js`} strategy='afterInteractive' />
		</>
	);
}