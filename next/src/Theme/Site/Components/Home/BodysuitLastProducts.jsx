import { useEffect } from "react";
import Link from "next/link";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";

export const BodysuitLastProducts = ({ items,categories,mediaPath,assetsPath,local,Lang }) => {
	let delay = "0.2";
	
	useEffect(() => {
		loadSwiper();
	}, []);
	const loadSwiper =()=>{
		if(typeof window.Swiper != "function" ){
			setTimeout(() => {
				handleSwiperFour();
			}, 500);
			return;
		}
	}
	const handleSwiperFour =()=>{
		if(jQuery('.swiper-four').length > 0){
			var swiper = new Swiper( '.swiper-four', {
				speed: 1000,
				loop: true,
				parallax: true,
				slidesPerView: 4,
				spaceBetween: 30,
				autoplay: {
					delay: 2500,
				},
				navigation: {
					nextEl: ".tranding-button-next",
					prevEl: ".tranding-button-prev",
				},	
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					591: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
				}
			});
		}
	}

    return(
		<>
		{/* Tranding Start */}
		<section className="content-inner-1 overflow-hidden">
			<div className="container">
				<div className=" row justify-content-md-between align-items-center">
					<div className="col-lg-6 col-md-8 col-sm-12">
						<div className="section-head style-1 m-b30  wow fadeInUp" data-wow-delay="0.2s">
							<div className="left-content">
								<h2 className="title">{Lang("public.title_last_products_1")}</h2>
								<p>{Lang("public.text_last_products_1")}</p>
							</div>
						</div>	
					</div>
					<div className="col-lg-6 col-md-4 col-sm-12 text-md-end">
						<Link className="btn btn-secondary m-b30" href={`/${local}/products`}>{Lang("public.see_all")}</Link>
					</div>
				</div>
				<div className="swiper-btn-center-lr">
					<div className="swiper swiper-four">
						<div className="swiper-wrapper">
							{items?.map((item, index)=>{
								delay = parseFloat(delay+0.1);
								let delayNew = delay+"s";
								let displayPrice = <> {"$"+item?.price} </>
								let displayDiscount = "";
								if(item?.discount>0)
								{
									displayDiscount = <>{Lang("public.up_to")+" "+item?.discount+"%"+Lang("public.off")}</>;
									displayPrice = <>
										{"$"+item?.discount_price}
										<br/>
										<del>{"$"+item?.price}</del>
									</>
								}
								
								return(
									<div className="swiper-slide" key={index}>
										<div className="shop-card wow fadeInUp" data-wow-delay={delayNew}>
											<div className="dz-media">
												<img src={mediaPath+"/product/"+item?.image} alt="image"/>
												<div className="shop-meta">
													<QuickView productId={item?.id} local={local} Lang={Lang} />
												</div>							
											</div>
											<div className="dz-content">
												<h5 className="title"><Link href={`/${local}/products/${item?.id}`}>{item?.name}</Link></h5>
												<h5 className="price">{displayPrice}</h5>
											</div>
											<div className="product-tag">
												<span className="badge ">{item?.category?.["title_"+local]}</span>
											</div>
										</div>
									</div>
								);
							})}			
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* Tranding Stop */}
    	</>
	);
}