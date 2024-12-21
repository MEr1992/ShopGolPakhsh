"use client";

export const SideBar = ({ categories, assetsPath, mediaPath, local, Lang }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <aside className="side-bar sticky-top mt-lg-0 mt-md-5 mt-3">
                    <div className="widget">
                        <h5 className="widget-title">جستجو</h5>
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="text" className="form-control" placeholder="جستجو" type="text" />
                                    <span className="input-group-btn">
                                        <button className="btn">
                                            <i className="icon feather icon-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="widget widget_categories style-1">
                        <h5 className="widget-title">دسته‌بندی</h5>
                        <ul>
                            <li className="cat-item"><a href="blog-category.html">پیراهن‌ها</a> (10)</li>
                            <li className="cat-item"><a href="blog-category.html">تاپ‌ها و بلوزها</a> (5)</li>
                            <li className="cat-item"><a href="blog-category.html">بوت‌ها</a> (17)</li>
                            <li className="cat-item"><a href="blog-category.html">زیورآلات</a> (13)</li>
                            <li className="cat-item"><a href="blog-category.html">آرایش</a> (06)</li>
                            <li className="cat-item"><a href="blog-category.html">عطرها</a> (17)</li>
                            <li className="cat-item"><a href="blog-category.html">اصلاح و پیرایش</a> (13)</li>
                            <li className="cat-item"><a href="blog-category.html">ژاکت</a> (06)</li>
                            <li className="cat-item"><a href="blog-category.html">کت</a> (22)</li>
                        </ul>
                    </div>
                    <div className="widget recent-posts-entry">
                        <h5 className="widget-title">آخرین پست‌ها</h5>
                        <div className="widget-post-bx">
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <a href="post-standard.html"><img src="images/blog/recent-blog/pic1.jpg" alt="/" /></a>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 17 اردیبهشت 2022 </li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><a href="post-standard.html">آناتومی صفحه خرید مؤثر</a></h6>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <a href="post-standard.html"><img src="images/blog/recent-blog/pic2.jpg" alt="/" /></a>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">17 اردیبهشت 2022 </li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><a href="post-standard.html">نکات طراحی صفحه خرید کاربر پسند و بهترین شیوه‌ها</a></h6>
                                </div>
                            </div>
                            <div className="widget-post clearfix">
                                <div className="dz-media">
                                    <a href="post-standard.html"><img src="images/blog/recent-blog/pic3.jpg" alt="/" /></a>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"> 17 اردیبهشت 2022 </li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><a href="post-standard.html">امنیت سبد خرید: حفظ ایمنی داده‌های مشتریان شما</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget_tag_cloud">
                        <h5 className="widget-title">برچسب‌ها</h5>
                        <div className="tagcloud">
                            <a href="blog-tag.html">نوستالژیک</a>
                            <a href="blog-tag.html">عروسی</a>
                            <a href="blog-tag.html">پنبه</a>
                            <a href="blog-tag.html">کتان</a>
                            <a href="blog-tag.html">آبی</a>
                            <a href="blog-tag.html">شهری</a>
                            <a href="blog-tag.html">جلسه تجاری</a>
                            <a href="blog-tag.html">رسمی</a>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};
