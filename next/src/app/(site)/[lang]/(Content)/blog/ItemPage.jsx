"use client";

import React, { useContext, useEffect } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
// import { List,Column,Grid,Paging,FilterRight,FilterLeft } from "@/app/(site)/[lang]/(Content)/products/ProductComponent";
import { useData } from "@/Theme/Midone/Utils/Data";
import { LoadMore } from "@/app/(site)/[lang]/(Content)/blog/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';
import Image from 'next/image';
import Link from 'next/link';

export const ItemPage = ({ assetsPath, mediaPath, local, Lang }) => {
    let { getNeedles } = useData();
    const {state, dispatch } = useContext(BlogContext);

    useEffect(() => {
        console.log(state.filters);
        if(state.status == "FIRST") 
            return;
        
        dispatch('START_LOADING');
        const query = (state.status == "")? new URLSearchParams(window.location.search) : new URLSearchParams();
        Object.keys(state.filters).map((key)=>{
            let value= state.filters[key];
            if(value != "") query.set(key, value);
        });
        getNeedles(`${local}${state.laralelUrl}?${query.toString()}&type=${state.status == "" && "first"}`, (items)=>
            {
                if(state.status == ""){
                    dispatch('SET_INFO', { blogs: items.blogs, mostVisitedBlogs: items.mostVisitedBlogs, subjects: items.subjects});
                }else{
                    dispatch('SET_BLOGS', { blogs: items.blogs });
                }
                dispatch('STOP_LOADING');
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);
    }, [state.filters]);

    return (
        <>
        {(state.loading)?
            <LoadingPage />
        :
            <div className="col-xl-8 col-lg-8">
                <div className="row">
                    {state?.blogs?.data?.map((item, index) =>{
                        return (
                            <>
                                <div className="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" key={index} data-wow-delay={`${0.1 * (index + 1)}s`} >
                                    <div className="dz-card style-5 light">
                                        <div className="dz-media">
                                            {/* <img src={`${assetsPath}/pixio/images/blog/blogpost-5/pic1.jpg`} alt="/" /> */}
                                            <img src={mediaPath+"/blog/"+item?.thumb} alt="/" />
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">{item?.created_at}</li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title">
                                                <Link href={`/${local}/blog/${item?.id}`}>{item?.title}</Link>
                                            </h4>
                                            <Link href={`/${local}/blog/${item?.id}`} className="font-14 read-btn">{Lang("public.read_more")}
                                                <i className="icon feather icon-chevron-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
					})}
                    <LoadMore Lang={Lang} />
                </div>
            </div>
        }		
    	</>
	);
}