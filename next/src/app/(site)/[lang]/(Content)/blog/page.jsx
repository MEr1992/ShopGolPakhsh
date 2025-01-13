"use client"

import React, { useContext,useEffect } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Content)/blog/Banner";
import { SideBar } from "@/app/(site)/[lang]/(Content)/blog/SideBar";
import { ItemPage } from "@/app/(site)/[lang]/(Content)/blog/ItemPage";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    const local = params?.lang ? params?.lang : 'en';
    const { dispatch, filterDispatch } = useContext(BlogContext);

    useEffect(() => {
        dispatch('START_LOADING');
        filterDispatch("SET_FILTER");
    }, []);

    return(
        <>
            <div className="page-content bg-light">
                <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            </div>
            <section className="content-inner-1 z-index-unset">
                <div className="container">
                    <div className="row">
                        <SideBar assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <div className="col-xl-8 col-lg-8">
                            <div className="row">
                                <ItemPage assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}