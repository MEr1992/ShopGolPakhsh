"use client"
import {useEffect} from "react";
import Link from "next/link";

export const InfoProduct = ({ item,assetsPath,mediaPath,local,Lang }) => {
	useEffect(() => {
        loadInfo();
	}, []);
    const loadInfo = ()=>{
        if(window.jQuery('#lightgallery').length > 0 || jQuery('#lightgallery2').length > 0){
            handleLightgallery();
            ProductGallerySwiper1();
        }
        else{
			setTimeout(() => loadInfo(), 1000);
		}
    }
	const ProductGallerySwiper1 = ()=>{
        if(jQuery('.product-gallery-swiper').length > 0){
            var swiper = new Swiper(".product-gallery-swiper", {
                spaceBetween: 10,
                slidesPerView: 2,
                //freeMode: true,
                //watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination-trading",
                },
            });
            var swiper2 = new Swiper(".product-gallery-swiper2", {
                spaceBetween: 0,
                updateOnWindowResize: true,	
                navigation: {
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
                },
                thumbs: {
                swiper: swiper,
                },
            });
        }
    }
	const handleLightgallery = ()=>{
        if (jQuery('#lightgallery').length > 0) {
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgThumbnail, lgZoom],
                selector: '.lg-item',
                thumbnail: true,
                exThumbImage: 'data-src'
            });
        }
        if (jQuery('#lightgallery2').length > 0) {
            lightGallery(document.getElementById('lightgallery2'), {
                plugins: [lgThumbnail, lgZoom],
                selector: '.lg-item',
                thumbnail: true,
                exThumbImage: 'data-src'
            });
        }
	}
    // let displayDiscount = (item?.discount>0)? <span className="badge bg-secondary mb-2">{Lang("public.sale")+" "+item?.discount+"% "+Lang("public.off")}</span> : "";
    let displayDiscount = "";
    let price = item?.price;
    if(item?.discount>0)
    {
        displayDiscount = <span className="badge bg-secondary mb-2">{Lang("public.sale")+" "+item?.discount+"% "+Lang("public.off")}</span>;
        price = <> {"$"+item?.discount_price} <del>{"$"+price}</del> </>;
    }
    let attachments = (item?.img)? item?.img?.split("###") : [];
    
    return(
		<>
            <section className="content-inner py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="dz-product-detail static-media sticky-top">
                                <div className="row align-items-center gx-xl-4 gx-3" id="lightgallery">
                                    <div className="col-xl-6 col-md-6 col-6">
                                        <div className="dz-media DZoomImage"> 
                                            <a className="mfp-link lg-item" href="images/products/product-detail3/dress1.png" data-src="images/products/product-detail3/dress1.png">
                                                <i className="feather icon-maximize dz-maximize top-left"></i>
                                            </a>
                                            <img src={assetsPath+"/pixio/images/products/product-detail3/dress1.png"} alt="/"/> 
                                        </div>
                                        <div className="dz-media DZoomImage"> 
                                            <a className="mfp-link lg-item" href="images/products/product-detail3/dress2.png" data-src="images/products/product-detail3/dress2.png">
                                                <i className="feather icon-maximize dz-maximize top-left"></i>
                                            </a>
                                            <img src={assetsPath+"/pixio/images/products/product-detail3/dress2.png"} alt="/"/> 
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-6">
                                        <div className="dz-media DZoomImage"> 
                                            <a className="mfp-link lg-item" href="images/products/product-detail3/dress3.png" data-src="images/products/product-detail3/dress3.png">
                                                <i className="feather icon-maximize dz-maximize top-left"></i>
                                            </a>
                                            <img src={assetsPath+"/pixio/images/products/product-detail3/dress3.png"} alt="/"/> 
                                        </div>
                                        <div className="dz-media DZoomImage"> 
                                            <a className="mfp-link lg-item" href="images/products/product-detail3/dress4.png" data-src="images/products/product-detail3/dress4.png">
                                                <i className="feather icon-maximize dz-maximize top-left"></i>
                                            </a>
                                            <img src={assetsPath+"/pixio/images/products/product-detail3/dress4.png"} alt="/"/> 
                                        </div>
                                    </div>	
                                </div>
                            </div>	
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="dz-product-detail style-2 p-t50 mb-0">
                                <div className="dz-content">
                                    <div className="dz-content-footer">
                                        <div className="dz-content-start">
                                            <span className="badge bg-secondary mb-2">SALE 20% Off</span>
                                            <h4 className="title mb-1">{item?.name}</h4>
                                            <div className="review-num">
                                                <a href="javascript:void(0);">{"("+item?.count_view+" View)"}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="para-text">{item?.summary}</p>
                                    <div className="meta-content m-b20 d-flex align-items-end">
                                        <div className="me-3">
                                            <span className="form-label">{Lang("public.price")}</span>
                                            <span className="price">{price}</span>
                                        </div>
                                        {/* <div className="btn-quantity quantity-sm light d-xl-none d-blcok d-sm-block">
                                            <label className="form-label">Quantity</label>
                                            <input  type="text" value="1" name="demo_vertical2"/>
                                        </div> */}
                                    </div>
                                    {/* <div className="product-num">
                                        <div className="btn-quantity light d-xl-block d-sm-none d-none">
                                            <label className="form-label">Quantity</label>
                                            <input  type="text" value="1" name="demo_vertical2"/>
                                        </div>
                                        <div className="d-block">
                                            <label className="form-label">Size</label>
                                            <div className="btn-group product-size m-0">
                                                <input type="radio" className="btn-check" name="btnradio1" id="btnradio101" checked=""/>
                                                <label className="btn" for="btnradio101">S</label>

                                                <input type="radio" className="btn-check" name="btnradio1" id="btnradiol02"/>
                                                <label className="btn" for="btnradiol02">M</label>

                                                <input type="radio" className="btn-check" name="btnradio1" id="btnradiol03"/>
                                                <label className="btn" for="btnradiol03">L</label>
                                            </div>
                                        </div>
                                        <div className="meta-content">
                                            <label className="form-label">Color</label>
                                            <div className="d-flex align-items-center color-filter">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel21" value="#24262B" aria-label="..." checked/>
                                                    <span></span>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel22" value="#8CB2D1" aria-label="..."/>
                                                    <span></span>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel23" value="#0D775E" aria-label="..."/>
                                                    <span></span>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel24" value="#FEC4C4" aria-label="..."/>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="btn-group cart-btn">
                                        <a href="shop-cart.html" className="btn btn-secondary text-uppercase">Add To Cart</a>
                                        <a href="shop-wishlist.html" className="btn btn-outline-secondary btn-icon">
                                            <i className="icon feather icon-heart"></i>
                                            Add To Wishlist
                                        </a>
                                    </div>
                                    <div className="dz-info">
                                        <ul>
                                            <li><strong>{Lang("public.code_product")+":"}</strong></li>
                                            <li>PRT584E63A</li>
                                        </ul>
                                        <ul>
                                            <li><strong>{Lang("public.category")+":"}</strong></li>
                                            <li><Link href={`/${local}/products?line=${item?.parent_category}`}>{item?.category_parent?.["title_"+local]+","}</Link></li>
                                            <li><Link href={`/${local}/products?category=${item?.category_id}`}>{item?.category?.["title_"+local]}</Link></li>				
                                        </ul>
                                        <ul>
                                            <li><strong>{Lang("public.tags")+":"}</strong></li>
                                            {(item?.keywords)?.map((keyword,index)=>{
                                                return(
                                                    <li key={index}><Link href="shop-standard.html">{(index==0)? "" : ","}{keyword?.title}</Link></li>												
                                                );
                                            })}										
                                        </ul>
                                        <ul className="social-icon">
                                            <li><strong>{Lang("public.share")+":"}</strong></li>
                                            <li>
                                                <a href="../../https@www.facebook.com/dexignzone" target="_blank">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../../https@www.linkedin.com/showcase/3686700/admin/default.htm" target="_blank">
                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../../https@www.instagram.com/dexignzone/default.htm" target="_blank">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="../../https@twitter.com/dexignzones" target="_blank">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="d-md-flex d-none align-items-center">
                                        <li className="icon-bx-wraper style-3 me-xl-4 me-2">
                                            <div className="icon-bx">
                                                <i className="flaticon flaticon-ship"></i>
                                            </div>
                                            <div className="info-content">
                                                <span>{Lang("public.title_cart_detail_grid_media_1")}</span>
                                                <h6 className="dz-title mb-0">{Lang("public.text_cart_detail_grid_media_1")}</h6>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper style-3">
                                            <div className="icon-bx">
                                                <i className="flaticon-fast-delivery-1"></i>
                                            </div>
                                            <div className="info-content">
                                                <span>{Lang("public.title_cart_detail_grid_media_2")}</span>
                                                <h6 className="dz-title mb-0">{Lang("public.text_cart_detail_grid_media_2")}</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="banner-social-media">
                                    <ul>
                                        <li>
                                            <a href="../../https@www.instagram.com/dexignzone/default.htm">Instagram</a>
                                        </li>
                                        <li>
                                            <a href="../../https@www.facebook.com/dexignzone">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="../../https@twitter.com/dexignzones">twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    	</>
	);
}