import { useEffect } from "react";
import Link from "next/link";

export const CosmeticsSuggestionProducts = ({ items,categories,mediaPath,assetsPath,local,Lang }) => {
	let delay = ["0.4s","0.6s","0.8s","0.4s","0.6s","0.8s","0.4s","0.6s","0.8s"];
	
	useEffect(() => {
		loadSwiper();
	}, []);
	const loadSwiper =()=>{
		if(typeof window.Swiper != "function" ){
			setTimeout(() => {
				handleSwiperProduct2();
			}, 500);
			return;
		}
	}
	const handleSwiperProduct2 =()=>{
		if(jQuery('.swiper-product2').length > 0){
			var swiper = new Swiper( '.swiper-product2', {
				speed: 1000,
				loop: true,
				parallax: true,
				slidesPerView: 3,
				spaceBetween: 30,
				pagination: {
					el: ".swiper-pagination-trading",
				},
				autoplay: {
					delay: 2500,
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
			{/* Featured Section Start */}
			<section className="content-inner  overflow-hidden">
				<div className="container">	
					<div className="section-head style-1 wow fadeInUp d-flex justify-content-between" data-wow-delay="0.2s">
						<div className="left-content">
							<h2 className="title">{Lang("public.title_suggestion_products_1")}</h2>
						</div>
						<Link href={`/${local}/products`} className="text-secondary font-14 d-flex align-items-center gap-1">{Lang("public.see_all")} 
							<i className="icon feather icon-chevron-right font-18"></i>
						</Link>			
					</div>
					<div className="swiper swiper-product2 swiper-visible ">
						<div className="swiper-wrapper">
							{items?.map((item, index)=>{
								let delayNew = delay[index];
								let displayPrice = <> {"$"+item?.price} </>
								if(item?.discount>0)
								{
									displayPrice = <>
										{"$"+item?.discount_price}
										<del>{"$"+item?.price}</del>
									</>
								}

								return(
									<div className="swiper-slide" key={index}>
										<div className="shop-card style-4 wow fadeInUp" data-wow-delay={delayNew}>
											<div className="dz-media">
												<img src={assetsPath+"/pixio/images/shop/product/1.png"} alt="image"/>
											</div>
											<div className="dz-content">
												<div>
													<h6 className="title"><Link href={`/${local}/products/${item?.id}`}>{item?.name}</Link></h6>
													<span className="sale-title">{item?.category?.["title_"+local]}</span>
												</div>
												<div className="d-flex align-items-center"> 
													<h6 className="price">{displayPrice}</h6>
													<span className="review"><i className="fa-solid fa-star"></i>{"("+item?.count_view+" View)"}</span>
												</div>	
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* Featured Section End */}
    	</>
	);
}