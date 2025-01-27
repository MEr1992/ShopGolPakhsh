"use client";

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { BlogColumn } from "@/app/(site)/[lang]/(Content)/blog/BlogColumnNew";
import { useData } from "@/Theme/Midone/Utils/Data";
import { LoadMore } from "@/Theme/Site/Components/Public/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const ItemPage = ({ mediaPath, local, Lang, pageInfo = "1" }) => {
	const {state} = useContext(ProductContext);
    const { blogs, url, status, filters, laralelUrl, loading, page } = state;
    const [loadmore, setLoadmore] = useState(false);
	const [newBlogs, setNewBlogs] = useState([]);
	let { getNeedles } = useData();
	useEffect(()=>{
		page == 1 && setNewBlogs(blogs);
	}, [blogs])

	useEffect(()=>{
		if(page > 1){
			setLoadmore("loading");
			getNeedles(`${url}&page=${page}`, (items)=> {
				setNewBlogs(items.blogs);
				setLoadmore(false);
			});
		}
	}, [page]);

	useEffect(()=>{
		if(newBlogs?.last_page <= page) {
			setLoadmore("end");
		}
	}, [newBlogs]);

    return (
        (loading)?
            <LoadingPage />
        :
            <>
                {(newBlogs?.data)?.map((item,index)=>{
                    return (
                        <>
                           <BlogColumn item={item} mediaPath={mediaPath} local={local} Lang={Lang} index={index} />
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
                        <ItemPage pageInfo={++pageInfo} mediaPath={mediaPath} local={local} Lang={Lang} />
                }
            </>	
	);
}