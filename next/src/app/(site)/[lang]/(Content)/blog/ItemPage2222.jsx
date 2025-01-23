"use client";

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { LoadMore } from "@/Theme/Site/Components/Public/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const ItemPage = ({ mediaPath, local, Lang, pageInfo = "1" }) => {
    let { getNeedles } = useData();
    const { state, dispatch } = useContext(BlogContext);
	const { blogs, url, status, filters, laralelUrl, loading, page } = state;
    const [loadmore, setLoadmore] = useState(false);
    const [newBlogs, setNewBlogs] = useState([]);

    useEffect(() => {
        if(status == "FIRST") 
            return;

        dispatch('START_LOADING');
        const query = (status == "")? new URLSearchParams(window.location.search) : new URLSearchParams();
        Object.keys(filters).map((key)=>{
            let value= filters[key];
            if(value != "") query.set(key, value);
        });
        // console.log('query.toString()');
        // console.log(!(query.toString()!="" && pageInfo>1));
           
        // const url = `${local}${laralelUrl}?${query.toString()}&type=${status == "" && "first"}`;
        const url = `${local}${laralelUrl}?${query.toString()}`;
            getNeedles(url+`&type=${status == "" && "first"}&page=${page}`, (items)=>
            {
                if(status == ""){
                    dispatch('SET_INFO', { blogs: items.blogs, mostVisitedBlogs: items.mostVisitedBlogs, subjects: items.subjects, url: url });
                }else{
                    dispatch('SET_BLOGS', { blogs: items.blogs, url: url });
                }
                dispatch('STOP_LOADING');
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);
    }, [filters]);

    useEffect(()=>{
        pageInfo == 1 && setNewBlogs(blogs);
    }, [blogs])

    useEffect(()=>{
        const hasAnyValue = Object.keys(filters).some(key => filters[key]);
        // console.log(hasAnyValue);

        // console.log(filters && filters.trim() !== '');
        // console.log(!filters);
        if(!hasAnyValue)
        {
            if(pageInfo > 1){
                // setLoadmore("loading");
                // getNeedles(`${url}&type=${status == "NEXT"}&page=${pageInfo}`, (items)=> {
                getNeedles(`${url}&page=${pageInfo}`, (items)=> {
                    setNewBlogs(items.blogs);
                    setLoadmore(false);
                });
            }
        }
        // else if(hasAnyValue)  pageInfo="1";
    }, [pageInfo]);

    useEffect(()=>{
        if(newBlogs?.last_page <= pageInfo) {
            setLoadmore("end");
        }
    }, [newBlogs]);
// console.log("loadmore");
// console.log(loadmore);

    return (
        (loading)?
            <LoadingPage />
        :
            <>
                {(newBlogs?.data)?.map((item,index)=>{
                    return (
                        <>
                            <div className="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" key={index} data-wow-delay={`${0.1 * (index + 1)}s`} >
                                <div className="dz-card style-5 light">
                                    <div className="dz-media">
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
                {
                    loadmore == "end" ?
                        <div></div>
                    : loadmore == "loading" ? 
                        <LoadingPage />
                    : loadmore === false ? 
                        <LoadMore onClick={()=>setLoadmore(true)} Lang={Lang} />
                    :
                        // <ItemPage pageInfo={(status == false || status == "" || status == "first")?1:++pageInfo} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <ItemPage pageInfo={++pageInfo} mediaPath={mediaPath} local={local} Lang={Lang} />
                }
            </>	
	);
}