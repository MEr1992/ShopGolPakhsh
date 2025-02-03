import { useEffect } from "react";
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const SuggestionProducts = ({ items,categories,mediaPath,assetsPath,local,Lang }) => {
	let delay = ["0.6s","0.8s","1.0s","1.2s","0.2s","0.4s","0.6s","2.0s"];
	let classLi = ["Tops","Dresses","Dresses","Tops","Dresses","Outerwear","Dresses","Tops"];
	
	useEffect(() => {
		handleSwiperProduct()
	}, []);
	
	const handleSwiperProduct =()=>{
		if(jQuery('.swiper-product').length > 0){
			var swiper = new Swiper( '.swiper-product', {
				speed: 1000,
				loop: true,
				parallax: true,
				slidesPerView: 3,
				spaceBetween: 15,
				pagination: {
					el: ".swiper-pagination-trading",
				},
				breakpoints: {
					1400: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 2,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 1.5,
					},
					600: {
						slidesPerView: 1,
					},
					575: {
						slidesPerView: 1,
					},
					340: {
						slidesPerView: 1,
						centeredSlides: true,
					},
				}
			});
		}
	}

    return(
		<>
		{/* Offer Section Start */}
		<section className="content-inner-2">
			<div className="container">	
				<div className="section-head style-1 wow fadeInUp d-flex justify-content-between m-b30" data-wow-delay="0.2s">
					<div className="left-content">
						<h2 className="title">Featured offer for you</h2>
					</div>
					<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See All 
						<i className="icon feather icon-chevron-right font-18"></i>
					</a>			
				</div>
			</div>
			<div className="container-fluid px-3">
				<div className="swiper swiper-product">
					<div className="swiper-wrapper product-style2">
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.4s">
								{/* <div className="product-media" style="background-image: url('images/clothes/1.png');"></div> */}
								<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/1.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">20% Off</span>
										<h2 className="product-name">Luxury Bras</h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.6s">
								<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/2.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">Sale Up to 50% Off</span>
										<h2 className="sub-title1">Summer <span className="year">2024</span></h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="0.8s">
								<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/3.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">20% Off</span>
										<h2 className="sub-title2">Swimwear<span className="bg-title">Sale</span></h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.0s">
								<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/1.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">20% Off</span>
										<h2 className="product-name">Luxury Bras</h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.2s">
								<div className="product-media" style={{backgroundImage: `url(images/clothes/2.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">Sale Up to 50% Off</span>
										<h2 className="sub-title1">Summer <span className="year">2024</span></h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide">
							<div className="product-box style-2 wow fadeInUp" data-wow-delay="1.4s">
								<div className="product-media" style={{backgroundImage: `url(${assetsPath}/pixio/images/clothes/3.png)`}}></div>
								<div className="product-content">
									<div className="main-content">
										<span className="offer">20% Off</span>
										<h2 className="sub-title2">Swimwear<span className="bg-title">Sale</span></h2>
										<a href="shop-list.html" className="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* Product End */}
    	</>
	);
}