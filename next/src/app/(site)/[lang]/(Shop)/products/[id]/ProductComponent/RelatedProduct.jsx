"use client"
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const RelatedProduct = ({ items,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
            <section className="content-inner-1  overflow-hidden">
                <div className="container">
                    <div className="section-head style-2 d-md-flex justify-content-between align-items-center">
                        <div className="left-content">
                            <h2 className="title mb-0">Related products</h2>
                        </div>
                        <a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See all products
                            <i className="icon feather icon-chevron-right font-18"></i>
                        </a>			
                    </div>
                    <div className="swiper-btn-center-lr">
                        <div className="swiper swiper-four">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="shop-card style-1">
                                        <div className="dz-media">
                                            <img src={assetsPath+"/pixio/images/shop/product/1.png"} alt="image" />
                                            <div className="shop-meta">
                                                            <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                <span className="d-md-block d-none">Quick View</span>
                                                            </a>
                                                            <div className="btn btn-primary meta-icon dz-wishicon">
                                                                <i className="icon feather icon-heart dz-heart"></i>
                                                                <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                            </div>
                                                            <div className="btn btn-primary meta-icon dz-carticon">
                                                                <i className="flaticon flaticon-basket"></i>
                                                                <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                            </div>
                                                        </div>								
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title"><a href="shop-list.html">Cozy Knit Cardigan Sweater</a></h5>
                                            <h5 className="price">$80</h5>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge ">Get 20% Off</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="shop-card style-1">
                                        <div className="dz-media">
                                            <img src={assetsPath+"/pixio/images/shop/product/2.png"} alt="image" />
                                            <div className="shop-meta">
                                                            <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                <span className="d-md-block d-none">Quick View</span>
                                                            </a>
                                                            <div className="btn btn-primary meta-icon dz-wishicon">
                                                                <i className="icon feather icon-heart dz-heart"></i>
                                                                <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                            </div>
                                                            <div className="btn btn-primary meta-icon dz-carticon">
                                                                <i className="flaticon flaticon-basket"></i>
                                                                <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                            </div>
                                                        </div>								
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title"><a href="shop-list.html">Sophisticated Swagger Suit</a></h5>
                                            <h5 className="price">$80</h5>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge ">Get 20% Off</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="shop-card style-1">
                                        <div className="dz-media">
                                            <img src={assetsPath+"/pixio/images/shop/product/3.png"} alt="image" />
                                            <div className="shop-meta">
                                                            <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                <span className="d-md-block d-none">Quick View</span>
                                                            </a>
                                                            <div className="btn btn-primary meta-icon dz-wishicon">
                                                                <i className="icon feather icon-heart dz-heart"></i>
                                                                <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                            </div>
                                                            <div className="btn btn-primary meta-icon dz-carticon">
                                                                <i className="flaticon flaticon-basket"></i>
                                                                <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                            </div>
                                                        </div>								
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title"><a href="shop-list.html">Classic Denim Skinny Jeans</a></h5>
                                            <h5 className="price">$80</h5>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge ">Get 20% Off</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="shop-card style-1">
                                        <div className="dz-media">
                                            <img src={assetsPath+"/pixio/images/shop/product/4.png"} alt="image" />
                                            <div className="shop-meta">
                                                            <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                <span className="d-md-block d-none">Quick View</span>
                                                            </a>
                                                            <div className="btn btn-primary meta-icon dz-wishicon">
                                                                <i className="icon feather icon-heart dz-heart"></i>
                                                                <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                            </div>
                                                            <div className="btn btn-primary meta-icon dz-carticon">
                                                                <i className="flaticon flaticon-basket"></i>
                                                                <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                            </div>
                                                        </div>								
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title"><a href="shop-list.html">Athletic Mesh Sports Leggings</a></h5>
                                            <h5 className="price">$80</h5>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge ">Get 20% Off</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="shop-card style-1">
                                        <div className="dz-media">
                                            <img src={assetsPath+"/pixio/images/shop/product/5.png"} alt="image" />
                                            <div className="shop-meta">
                                                            <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                <span className="d-md-block d-none">Quick View</span>
                                                            </a>
                                                            <div className="btn btn-primary meta-icon dz-wishicon">
                                                                <i className="icon feather icon-heart dz-heart"></i>
                                                                <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                            </div>
                                                            <div className="btn btn-primary meta-icon dz-carticon">
                                                                <i className="flaticon flaticon-basket"></i>
                                                                <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                            </div>
                                                        </div>								
                                        </div>
                                        <div className="dz-content">
                                            <h5 className="title"><a href="shop-list.html">Vintage Denim Overalls Shorts</a></h5>
                                            <h5 className="price">$80</h5>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge ">Get 20% Off</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-align">
                            <div className="tranding-button-prev btn-prev">
                                <i className="flaticon flaticon-left-chevron"></i>
                            </div>
                            <div className="tranding-button-next btn-next">
                                <i className="flaticon flaticon-chevron"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
    	</>
	);
}