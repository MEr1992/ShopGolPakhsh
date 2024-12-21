"use client"

import Image from "next/image";

export const Index = ({ items, mediaPath,assetsPath,local }) => {
	
    return(
		<>
            <div className="col-xl-8 col-lg-8">
			<div class="dz-blog blog-single style-1 sidebar">
							<h1 class="dz-title">{items?.title}</h1>
							<div class="dz-meta">
								<ul>
									<li class="post-date">{items?.created_at}</li>
									{/* <li class="dz-user">
										<i class="fa-solid fa-user"></i>
										By <a href="javascript:void(0);">KK Sharma</a>
									</li>
									<li class="dz-comment">
										<i class="fa-solid fa-message"></i>
										<a href="javascript:void(0);">24 Comments</a>
									</li> */}
								</ul>
							</div>
							<div class="dz-media rounded">
							<Image
                                        src={`${mediaPath}/blogs/${items?.thumb}`}
                                        alt={items?.title}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                    />							</div>
							<div class="dz-info">
							<div
								className="dz-post-text"
								dangerouslySetInnerHTML={{ __html: items?.text }}
								></div>

								{/* <div class="dz-share-post meta-bottom">
									<div class="post-tags">
										<strong>Tags:</strong>
										<a href="javascript:void(0);">Dresses</a>
										<a href="javascript:void(0);">Boots</a>
										<a href="javascript:void(0);">Jewelry</a>
										<a href="javascript:void(0);">Jacket</a>
										<a href="javascript:void(0);">Coat</a>
									</div>
									<div class="dz-social-icon primary-light">
										<ul>
											<li>
												<a href="../../https@www.facebook.com/dexignzone">
													<i class="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="../../https@www.instagram.com/dexignzone/default.htm">
													<i class="fab fa-instagram"></i>
												</a>
											</li>
											<li>
												<a href="../../https@twitter.com/dexignzones">
													<i class="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="../../https@www.linkedin.com/showcase/3686700/admin/default.htm">
													<i class="fa-brands fa-linkedin-in"></i>
												</a>
											</li>
										</ul>
									</div>
								</div> */}
							</div>
							
						</div>
			</div>		
    	</>
	);
}