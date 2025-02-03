"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Slider,Category,Brand,CosmeticsLastProducts,BodysuitLastProducts,CosmeticsSuggestionProducts,BodysuitSuggestionProducts } from "@/Theme/Site/Components/";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : 'en' ;
    const formUrl = ""; 
    const laralelUrl = "/"; 

    useEffect(() => {
        window.$ && window.$('#top-menu').addClass('style-1 header-transparent');
        getNeedles(local, setItems);
        // getNeedles(local+laralelUrl, setItems);
    }, []);

    return(
        <>
            <Slider local={local} items={items?.sliders} assetsPath={assetsPath} mediaPath={mediaPath} Lang={Lang} />
            <Category items={items?.categories?.filter(cat=>cat?.parent_id>0)} mediaPath={mediaPath} assetsPath={assetsPath} local={local} Lang={Lang} />
            <BodysuitLastProducts items={items?.bodysuitLastProducts} categories={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <CosmeticsLastProducts items={items?.cosmeticsLastProducts} categories={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <Brand items={items?.brands} mediaPath={mediaPath} assetsPath={assetsPath} local={local} Lang={Lang} />
            <BodysuitSuggestionProducts local={local} items={items?.bodysuitSuggestionProducts} mediaPath={mediaPath} assetsPath={assetsPath} Lang={Lang} />
            <CosmeticsSuggestionProducts items={items?.cosmeticsSuggestionProducts} categories={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
        </>
    );
}