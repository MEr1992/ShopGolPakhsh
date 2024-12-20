import {useEffect} from "react"

export const Slider = ({assetsPath}) => {
	
	useEffect(() => {
		loadSlider();
	}, []);

	const loadSlider = ()=>{
		if(window.$ && window.$('.slider-main-top').length > 0 && window.$('.slider-main-top').slick){
			$('.slider-main-top').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: false,
				infinite: true,
				asNavFor: '.slider-thumbs-top'
			});

			$('.slider-thumbs-top').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				asNavFor: '.slider-main-top',
				dots: false,
				centerMode: false,
				infinite: true,
				focusOnSelect: true,
			});
			// MagnificPopup();
			// handleTextChar();
		}else{
			setTimeout(()=> loadSlider() , 1000);
		}
	}
	const handleTextChar = ()=>{
		var wordRoateElements = document.querySelectorAll('.word-rotate');
		wordRoateElements.forEach((data, _) => {
			var wordRoate = $(data).text().split('');
			const step = 360 / wordRoate.length;
			wordRoate.forEach((el, i) => {
				$(data).closest('.word-rotate-box').append('<span class="text__char" style="--char-rotate :' + (i * step) + 'deg">' + el + '</span>');
			})
			$(data).remove();
		})
	}
	const MagnificPopup = ()=>{
		if (jQuery('.mfp-gallery').length > 0) {
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function (item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
			/* magnificPopup function end */
		}

		if (jQuery('.mfp-video').length > 0) {
			/* magnificPopup for Play video function */
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
						'<div class="mfp-title">Some caption</div>' +
						'</div>'
				},
				callbacks: {
					markupParse: function (template, values, item) {
						values.title = item.el.attr('title');
					}
				}
			});

		}

		if (jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
			/* magnificPopup for Play video function end */
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup && $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: true
			});
		}
	}
		
    return(
		<>
			<div className="main-slider-wrapper">
				<div className="slider-inner">
					<div className="row">
						<div className="col-lg-6">
							<div className="slider-main-top">
								<div className="slick-slide">
									<div className="content-info">
										<h1 className="title">Beautiful Woman Purple Sweater.</h1>
										<div className="swiper-meta-items">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price-num d-inline-block">&#036;80.00</span>
											</div>
										</div>
										<div className="content-btn m-b30">
											<a href="shop-wishlist.html" className="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</a>
											<a href="product-default.html" className="btn btn-outline-secondary btnhover20">VIEW DETAIL </a>
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="content-info">
										<h1 className="title">Shot Slad Curly Woman.</h1>
										<div className="swiper-meta-items">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price-num d-inline-block">&#036;30.00</span>
											</div>
										</div>
										<div className="content-btn m-b30">
											<a href="shop-wishlist.html" className="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</a>
											<a href="product-default.html" className="btn btn-outline-secondary btnhover20">VIEW DETAIL </a>
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="content-info">
										<h1 className="title">Athletic Mesh Sports Leggings.</h1>
										<div className="swiper-meta-items">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price-num d-inline-block">&#036;75.00</span>
											</div>
										</div>
										<div className="content-btn m-b30">
											<a href="shop-wishlist.html" className="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</a>
											<a href="product-default.html" className="btn btn-outline-secondary btnhover20">VIEW DETAIL </a>
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="content-info">
										<h1 className="title">Curly Girl Beautiful Dress.</h1>
										<div className="swiper-meta-items">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price-num d-inline-block">&#036;50.00</span>
											</div>
										</div>
										<div className="content-btn m-b30">
											<a href="shop-wishlist.html" className="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</a>
											<a href="product-default.html" className="btn btn-outline-secondary btnhover20">VIEW DETAIL </a>
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="content-info">
										<h1 className="title">Vintage Denim Overalls Shorts.</h1>
										<div className="swiper-meta-items">
											<div className="meta-content">
												<span className="price-name">Price</span>
												<span className="price-num d-inline-block">&#036;65.00</span>
											</div>
										</div>
										<div className="content-btn m-b30">
											<a href="shop-wishlist.html" className="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</a>
											<a href="product-default.html" className="btn btn-outline-secondary btnhover20">VIEW DETAIL </a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="slider-thumbs-top">
								<div className="slick-slide">
									<div className="banner-media" data-name="Winter">
										<div className="img-preview">
											<img src={assetsPath+"/pixio/images/banner/banner-media.png"} alt="banner-media" />
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="banner-media" data-name="Summer">
										<div className="img-preview">
											<img src={assetsPath+"/pixio/images/banner/banner-media2.png"} alt="banner-media" />
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="banner-media" data-name="Leggings">
										<div className="img-preview">
											<img src={assetsPath+"/pixio/images/banner/banner-media.png"} alt="banner-media" />
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="banner-media" data-name="Dress">
										<div className="img-preview">
											<img src={assetsPath+"/pixio/images/banner/banner-media4.png"} alt="banner-media" />
										</div>
									</div>
								</div>
								<div className="slick-slide">
									<div className="banner-media" data-name="Shorts">
										<div className="img-preview">
											<img src={assetsPath+"/pixio/images/banner/banner-media5.png"} alt="banner-media" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bottom-content align-items-end wow fadeInUp" data-wow-delay="1.0s" style={{visibility: "visible", animationDelay: "1s", animationName: "fadeInUp"}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
							<path d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z" fill="black"></path>
						</svg>
						<div>
							<span className="sub-title">Summer Collection</span>
							<h4 className="title">Trendy and Classic  for the New Season</h4>
						</div>
					</div>
					<svg className="star-1" xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
						<path d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z" fill="#FEEB9D"></path>
					</svg>
					<svg className="star-2" xmlns="http://www.w3.org/2000/svg" width="82" height="94" viewBox="0 0 82 94" fill="none">
						<path d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z" fill="black"></path>
					</svg>
					<a className="animation-btn popup-youtube" href="https://www.youtube.com/watch?v=YwYoyQ1JdpQ">
						<div className="text-row word-rotate-box c-black">
							
							<i className="fa-solid fa-play text-dark badge__emoji"></i>
						<span className="text__char" style={{charRotate :"0deg"}}> </span><span className="text__char" style={{charRotate :"14.4deg"}}>M</span><span className="text__char" style={{charRotate :"28.8deg"}}>o</span><span className="text__char" style={{charRotate :"43.2deg"}}>r</span><span className="text__char" style={{charRotate :"57.6deg"}}>e</span><span className="text__char" style={{charRotate :"72deg"}}> </span><span className="text__char" style={{charRotate :"86.4deg"}}>C</span><span className="text__char" style={{charRotate :"100.8deg"}}>o</span><span className="text__char" style={{charRotate :"115.2deg"}}>l</span><span className="text__char" style={{charRotate :"129.6deg"}}>l</span><span className="text__char" style={{charRotate :"144deg"}}>e</span><span className="text__char" style={{charRotate :"158.4deg"}}>c</span><span className="text__char" style={{charRotate :"172.8deg"}}>t</span><span className="text__char" style={{charRotate :"187.20000000000002deg"}}>i</span><span className="text__char" sty0le={{charRotate :"201.6deg"}}>o</span><span className="text__char" style={{charRotate :"216deg"}}>n</span><span className="text__char" style={{charRotate :"230.4deg"}}> </span><span className="text__char" style={{charRotate :"244.8deg"}}>E</span><span className="text__char" style={{charRotate :"259.2deg"}}>x</span><span className="text__char" style={{charRotate :"273.6deg"}}>p</span><span className="text__char" style={{charRotate :"288deg"}}>l</span><span className="text__char" style={{charRotate :"302.40000000000003deg"}}>o</span><span className="text__char" style={{charRotate :"316.8deg"}}>r</span><span className="text__char" style={{charRotate :"331.2deg"}}>e</span><span className="text__char" style={{charRotate :"345.6deg"}}> </span></div>
					</a>
				</div>
			</div>
    	</>
	);
}