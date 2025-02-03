import { useEffect } from "react";
import Link from "next/link";
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const CosmeticsLastProducts = ({ items,categories,mediaPath,assetsPath,local,Lang }) => {
	let delay = ["0.6s","0.8s","1.0s","1.2s","0.2s","0.4s","0.6s","2.0s"];
	let classLi = ["Tops","Dresses","Dresses","Tops","Dresses","Outerwear","Dresses","Tops"];
	
	useEffect(() => {
		// handleSwiperFour()
	}, []);
	
	// const loadCategory = () => {
	// 	if(window.Pixio){
	// 		window.Pixio && window.Pixio.load();
	// 	}else{
	// 		setTimeout(loadCategory, 1000)
	// 	}
	// }
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
			{/* Blog Start */}
			<section className="content-inner">
				<div className="container">
					<div className="section-head style-1 wow fadeInUp d-md-flex justify-content-between align-items-center" data-wow-delay="0.1s">
						<div className="left-content">
							<h2 className="title">{Lang("public.title_last_products_2")}</h2>
							<p>{Lang("public.text_last_products_2")}</p>
						</div>
						<Link className="btn btn-secondary " href={`/${local}/products`}>{Lang("public.see_all")}</Link>			
					</div>
					<div className="row blog-shap">
							{items?.map((item, index)=>{
								let i = index+1;
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
									<div className="col-lg-6 col-md-6 col-sm-12 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.1s">
										<div className={"dz-card blog-half style-6 card-"+i}>
											<div className="dz-media">
												<img src={assetsPath+"/pixio/images/blog/blogpost-4/pic1.jpg"} alt="/"/>
											</div>
											<div className="dz-info">
												<div className="dz-meta">
													<ul>
														<li className="post-date">{item?.category?.["title_"+local]}</li>
													</ul>
												</div>
												<h4 className="dz-title">
													<Link href={`/${local}/products/${item?.id}`}>{item?.name}</Link>
												</h4>
												<div className="dz-content">
													<h5 className="price">{displayPrice}</h5>
												</div>
												<Link href={`/${local}/products/${item?.id}`} className="btn btn-theme text-uppercase">{Lang("public.view_info")}<i className="fa-solid fa-arrow-right"></i></Link>
											</div>
										</div>
									</div> 
								);
							})}
					</div>		
				</div>
			</section>
			{/* Blog End */}
    	</>
	);
}