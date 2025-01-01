"use client"

import React, { useContext,useEffect,useState } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { ProductContext } from '@/app/(site)/[lang]/PageTools/Context/ProductContext';
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/Banner";
import { Product } from "@/app/(site)/[lang]/(Shop)/products/Product";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/SideBar";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let { getNeedles } = useData();
    const local = params?.lang ? params?.lang : 'en';
    let laralelUrl = "/products";
    const { state, startLoading, stopLoading, info, loadProducts, loadMoreProducts, filter, search, line, category, min, max } = useContext(ProductContext);

    useEffect(() => {
        startLoading();
        const urlParams = new URLSearchParams(window.location.search);
        // urlParams.set('page', 1);
        getNeedles(`${local}${laralelUrl}?${urlParams.toString()}&type=first`, (items)=>
            {
                info(items.products,items.categories);
                stopLoading();
            }
        );
        filter(urlParams);
    }, []);

    useEffect(() => {
        startLoading();
        const query = new URLSearchParams();
        Object.keys(state.filters).map((key)=>{
            if(state.filters[key] != "") query.set(key, state.filters[key]);
        })
        getNeedles(`${local}${laralelUrl}?${query.toString()}`, (items)=>
            {
                loadProducts(items.products);
                stopLoading();
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);
    }, [state.filters]);

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <section className="content-inner-3 pt-3 z-index-unset">
                <div className="container">
                    <div className="row">
                        <SideBar categories={state?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <Product items={state?.products} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                    </div>
                </div>
            </section>
        </>
    );
};