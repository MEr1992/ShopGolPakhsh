"use client";

import Image from 'next/image';
import Link from 'next/link';

export const ItemPage = ({ items, mediaPath,assetsPath,local }) => {
    let data = items?.data || [];


    return (
        <>
            <div className="col-xl-8 col-lg-8">
                <div className="row">
                    {data.map((item, index) => (
                        <div
                            className="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp"
                            key={index}
                            data-wow-delay={`${0.1 * (index + 1)}s`}
                        >
                            <div className="dz-card style-5 light">
                                <div className="dz-media">
                                    <Image
                                        src={`${mediaPath}/blogs/${item.thumb}`}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">{item.created_at}</li>
                                        </ul>
                                    </div>
                                    <h4 className="dz-title">
                                        <Link href={`/${local}/blog/${item.id}`}>{item.title}</Link>
                                    </h4>
                                    <Link href={`${local}/blog/${item.id}`} className="font-14 read-btn">
                                        ادامه مطلب 
                                        <i className="icon feather icon-chevron-left"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.7s">
                        <Link href={`/${local}/blog`} className="btn btn-secondary">
                            بارگذاری بیشتر
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
