import { useConfig } from "@/lib/config";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tools, useData } from "@/Theme/Midone";
import Script from 'next/script'

export const Footer = ({ params="" }) => {
	// console.log(params);
	const {assetsPath } = useConfig();
	let { getNeedles } = useData();
    let [needles, setNeedles] = useState({});
    const formUrl = "/footer";
    const local = "fa";
    // const local = params?.lang ?  params?.lang : "en" ;

	useEffect(() => {
		getNeedles(local + formUrl, setNeedles);
		// window.jQuery = window.$;
    }, []);

    return(
		<>
			{/* Footer */}
			<footer className="site-footer style-1">
				{/* Footer Top */}
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
								<div className="widget widget_about me-2">
									<div className="footer-logo logo-white">
										<a href="index.html"><img src="images/logo.svg" alt=""/></a> 
									</div>
									<ul className="widget-address">
										<li>
											<p><span>Address</span> : 451 Wall Street, UK, London</p>
										</li>
										<li>
											<p><span>E-mail</span> : example@info.com</p>
										</li>
										<li>
											<p><span>Phone</span> : (064) 332-1233</p>
										</li>
									</ul>
									<div className="subscribe_widget">
										<h6 className="title fw-medium text-capitalize">subscribe to our newsletter</h6>	
										<form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
											<div className="dzSubscribeMsg"></div>
											<div className="form-group">
												<div className="input-group mb-0">
													<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address"/>
													<div className="input-group-addon">
														<button name="submit" value="Submit" type="submit" className="btn">
															<i className="icon feather icon-arrow-right"></i>
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
								<div className="widget widget_post">
									<h5 className="footer-title">Recent Posts</h5>
									<ul>
										<li>
											<div className="dz-media">
												<img src="images/shop/product/small/1.png" alt=""/>
											</div>
											<div className="dz-content">
												<h6 className="name"><a href="post-standard.html">Cozy Knit Cardigan Sweater</a></h6>
												<span className="time">July 23, 2023</span>
											</div>
										</li>
										<li>
											<div className="dz-media">
												<img src="images/shop/product/small/2.png" alt=""/>
											</div>
											<div className="dz-content">
												<h6 className="name"><a href="post-standard.html">Sophisticated Swagger Suit</a></h6>
												<span className="time">July 23, 2023</span>
											</div>
										</li>
										<li>
											<div className="dz-media">
												<img src="images/shop/product/small/3.png" alt=""/>
											</div>
											<div className="dz-content">
												<h6 className="name"><a href="post-standard.html">Athletic Mesh Sports Leggings</a></h6>
												<span className="time">July 23, 2023</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
								<div className="widget widget_services">
									<h5 className="footer-title">Our Stores</h5>
									<ul>
										<li><a href="javascript:void(0);">New York</a></li>
										<li><a href="javascript:void(0);">London SF</a></li>
										<li><a href="javascript:void(0);">Edinburgh</a></li>
										<li><a href="javascript:void(0);">Los Angeles</a></li>
										<li><a href="javascript:void(0);">Chicago</a></li>
										<li><a href="javascript:void(0);">Las Vegas</a></li>
									</ul>   
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
								<div className="widget widget_services">
									<h5 className="footer-title">Useful Links</h5>
									<ul>
										<li><a href="javascript:void(0);">Privacy Policy</a></li>
										<li><a href="javascript:void(0);">Returns</a></li>
										<li><a href="javascript:void(0);">Terms & Conditions</a></li>
										<li><a href="javascript:void(0);">Contact Us</a></li>
										<li><a href="javascript:void(0);">Latest News</a></li>
										<li><a href="javascript:void(0);">Our Sitemap</a></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-2 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.5s">
								<div className="widget widget_services">
									<h5 className="footer-title">Footer Menu</h5>
									<ul>
										<li><a href="javascript:void(0);">Instagram profile</a></li>
										<li><a href="javascript:void(0);">New Collection</a></li>
										<li><a href="javascript:void(0);">Woman Dress</a></li>
										<li><a href="javascript:void(0);">Contact Us</a></li>
										<li><a href="javascript:void(0);">Latest News</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Footer Top End */}
				{/* Footer Bottom */}
				<div className="footer-bottom">
					<div className="container">
						<div className="row fb-inner wow fadeInUp" data-wow-delay="0.1s">
							<div className="col-lg-6 col-md-12 text-start"> 
								<p className="copyright-text">© <span className="current-year">2024</span> <a href="../../https@www.dexignzone.com/default.htm">DexignZone</a> Theme. All Rights Reserved.</p>
							</div>
							<div className="col-lg-6 col-md-12 text-end"> 
								<div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
									<span className="me-3">We Accept: </span>
									<img src="images/footer-img.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Footer Bottom End */}	
			</footer>
			{/* Footer End */}

			<Script id='jquery.min.js' src={assetsPath + '/pixio/js/jquery.min.js'} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/wow/wow.min.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap/dist/js/bootstrap.bundle.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-select/dist/js/bootstrap-select.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-touchspin/bootstrap-touchspin.js`} strategy='afterInteractive' />
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
			{/* <Script src={`${assetsPath}/pixio/js/dz.carousel.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/js/dz.ajax.js`} strategy='afterInteractive' /> */}
			<Script src={`${assetsPath}/pixio/js/custom.js`} strategy='afterInteractive' />
		</>
	);
}