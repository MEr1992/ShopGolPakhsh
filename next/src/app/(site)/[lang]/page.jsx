"use client"

import { useEffect,useState } from "react";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Slider,Category,LastProducts,BestSeller,Line,MostVisited,Brand } from "@/Theme/Site/Components/";

export default function Page({ params }) {
    const formUrl = "" ; 
    // const local = params?.lang ? params?.lang : 'en' ;
    const local = 'fa';
    let {getNeedles} = useData();
    let [needles, setNeedles] = useState();
    const { assetsPath } = useConfig();

    useEffect(() => {
        // getNeedles(local+formUrl, setNeedles);
        window.$ && window.$('#top-menu').addClass('style-1 header-transparent')
    }, []);

    return(
        <>
            <Slider assetsPath={assetsPath} />
            <Category assetsPath={assetsPath} />
            <LastProducts assetsPath={assetsPath} />
            <BestSeller assetsPath={assetsPath} />
            <Line assetsPath={assetsPath} />
            <MostVisited assetsPath={assetsPath} />
            <Brand assetsPath={assetsPath} />
        </>
    );
}