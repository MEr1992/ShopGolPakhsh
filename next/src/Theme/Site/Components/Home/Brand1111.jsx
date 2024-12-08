import {useEffect} from "react"
import WOW from 'wowjs';
export const Brand = ({assetsPath}) => {
	
	// var screenWidth = $(window).width();
	useEffect(() => {
		// screenWidth = $(window).width();
		// dzTheme();;
		// handleMultipleImageSize();
		// handleCurrentActive();
		// handleMagnifyGallery();
		// handleTagSlider();
		// dzCategoryToggle();
		// wow_animation();
	}, []);
	
	const wow_animation = ()=>{
		if ($('.wow').length > 0) {
			var wow = new WOW(
				{
					boxClass: 'wow',      // animated element css class (default is wow)
					animateClass: 'animated', // animation css class (default is animated)
					offset: 50,          // distance to the element when triggering the animation (default is 0)
					mobile: false       // trigger animations on mobile devices (true is default)
				});

			setTimeout(function () {
				wow.init();
			}, 120);
		}
	}
	const handleMagnifyGallery = ()=>{
	
			const imageSelector = $('.DZoomImage');
	
			imageSelector.on('mousemove', function (t) {
				let e = $(this).offset();
				var i = (t.pageX - e.left) / $(this).width() * 100 <= 100 ? (t.pageX - e.left) / $(this).width() * 100 : 100;
				var c = (t.pageY - e.top) / $(this).height() * 100 <= 100 ? (t.pageY - e.top) / $(this).height() * 100 : 100;
	
				$(this).find('img').css("transform-origin", i + "% " + c + "%");
			})
			imageSelector.on('mouseenter', function (t) {
				let n = $(this).find('img');
				n.css("cursor", "pointer"),
					n.css("transition", "0.1s"),
					n.css("transform", "scale(" + 1.5 + ")"),
					$(this).find('.mfp-link i').css({ opacity: 1, zIndex: 1 })
			});
			imageSelector.on('mouseleave', function (t) {
				let n = $(this).find('img');
				n.css("transition", "0.1s"), n.css("transform", "scale(1)")
				$(this).find('.mfp-link i').css({ opacity: 0, zIndex: 1 })
			});
	}
	const dzTheme = ()=>{
		if (screenWidth <= 991) {
			var menuObj;
			jQuery('.navbar-nav > li > a, .sub-menu > li > a, .navbar-nav > li > a > i, .sub-menu > li > a > i')
				.unbind()
				.on({
					click: function (e) {
						menuObj = jQuery(this);
						handleMenus(e, menuObj);
					},
					keypress: function (e) {
						if (e.key !== 'Enter') {
							return false;
						}
						menuObj = jQuery(this);
						handleMenus(e, menuObj);
					},
				});
			jQuery('.tabindex').attr("tabindex", "0");

			function handleMenus(e, menuObj) {
				if (menuObj.parent('li').has('ul').length > 0) {
					e.preventDefault();
				}
				if (menuObj.parent().hasClass('open')) {
					menuObj.parent().removeClass('open');
				} else {
					if (menuObj.hasClass('sub-menu')) {
						menuObj.parent().addClass('open');
					} else {
						menuObj.parent().parent().find('li').removeClass('open');
						menuObj.parent().addClass('open');
					}
				}
			}
		} else {
			jQuery('.tabindex').removeAttr("tabindex");
		}

		jQuery('.menu-btn, .openbtn').on('click', function () {
			jQuery('.contact-sidebar').addClass('active');
		});
		jQuery('.menu-close').on('click', function () {
			jQuery('.contact-sidebar').removeClass('active');
			jQuery('.menu-btn').removeClass('open');
		});

		jQuery('.dz-carticon').on('click', function () {
			jQuery(this).toggleClass('active');
		});
		jQuery('.dz-wishicon').on('click', function () {
			jQuery(this).toggleClass('active');
		});

		$('.mega-menu').each(function() {
			if ($(this).hasClass('menu-center')) {
				$(this).parent().addClass('menu-relative');
			}
		});
	}

	const handleTagSlider = ()=>{
			if (jQuery('#tagSlider').length > 0) {
				$('#tagSlider').grouploop({
					velocity: 1,
					forward: false,
					pauseOnHover: true,
					childNode: ".item",
					childWrapper: ".item-wrap"
				});
	
			}
			if (jQuery('#tagSlider2').length > 0) {
				$('#tagSlider2').grouploop({
					velocity: 1,
					forward: true,
					pauseOnHover: true,
					childNode: ".item",
					childWrapper: ".item-wrap"
				});
			}
		}
	const handleCurrentActive = ()=>{
		for (var nk = window.location, o = $("ul.navbar a").filter(function () {
			return this.href == nk;
		}).addClass("active").parent().addClass("active"); ;) {

			if (!o.is("li")) break;

			o = o.parent()
				.addClass("show")
				.parent('li')
				.addClass("active");
		}
	}

	const handleMultipleImageSize = ()=>{
				// window.jQuery = $;
			console.log('test');
			console.log(jQuery('.smart-product-details .dz-media img'));
			if (typeof window !== "undefined")
			{

				jQuery('.smart-product-details .dz-media img').removeAttr('style');

				setTimeout(function () {
					jQuery('.smart-product-details .dz-content').each(function () {
						var ch = Math.ceil(jQuery(this).outerHeight());
						jQuery(this).parent().find('.dz-media img').css('--static-height', ch + 'px');
					});
				}, 1000);
			}
	}
	const dzCategoryToggle = ()=>{
		jQuery('.category-toggle .toggle-btn').on('click', function () {
			$(".toggle-items").slideToggle("slow");
			jQuery(this).toggleClass('active');
		});
		jQuery('.browse-category-menu .category-btn').on('click', function () {
			$(".category-menu-items").slideToggle("slow");
			jQuery(this).toggleClass('active');
		});
	}
    return(
		<>
			{/* company-box Start */}
			<section className="content-inner-2">
				<div className="container">	
					<div className="section-head style-1 wow fadeInUp d-flex  justify-content-between" data-wow-delay="0.2s">
						<div className="left-content">
							<h2 className="title">Sponsored</h2>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See All 
							<i className="icon feather icon-chevron-right font-18"></i>
						</a>			
					</div>
					<div className="swiper swiper-company">
						<div className="swiper-wrapper ">
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="0.4s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/1.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo1.png"} alt="image" className="logo"/>
									</div>
									<div className="dz-content">
										<h6 className="title">Outdoor Shoes	</h6>
										<span className="sale-title">Min. 30% Off</span>
									</div>		
								</div>
							</div>
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="0.6s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/2.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo2.png"} alt="image" className="logo"/>
										<span className="sale-badge">in Store</span>	
									</div>
									<div className="dz-content">
										<h6 className="title">Best Cloths</h6>
										<span className="sale-title">Up To 20% Off</span>
									</div>		
								</div>
							</div>
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="0.8s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/1.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo3.png"} alt="image" className="logo"/>
									</div>
									<div className="dz-content">
										<h6 className="title">Sports Shoes</h6>
										<span className="sale-title">up to 30% Off</span>
									</div>		
								</div>
							</div>
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="1.0s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/3.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo4.png"} alt="image" className="logo"/>
										<span className="sale-badge">in Store</span>
									</div>
									<div className="dz-content">
										<h6 className="title">modern jewellery</h6>
										<span className="sale-title">Min. 30% Off</span>
									</div>		
								</div>
							</div>
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="1.2s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/1.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo1.png"} alt="image" className="logo"/>
									</div>
									<div className="dz-content">
										<h6 className="title">Outdoor Shoes	</h6>
										<span className="sale-title">Min. 30% Off</span>
									</div>		
								</div>
							</div>
							<div className="swiper-slide">
								<div className="company-box style-1 wow fadeInUp" data-wow-delay="1.4s">
									<div className="dz-media">
										<img src={assetsPath+"/pixio/images/company/2.jpg"} alt="image" className="company-img"/>
										<img src={assetsPath+"/pixio/images/company/logo/logo2.png"} alt="image" className="logo"/>
										<span className="sale-badge">in Store</span>	
									</div>
									<div className="dz-content">
										<h6 className="title">Best Cloths</h6>
										<span className="sale-title">Up To 20% Off</span>
									</div>		
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* company-box End */}
    	</>
	);
}