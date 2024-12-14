"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/Banner";
import { Product } from "@/app/(site)/[lang]/(Shop)/products/Product";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/SideBar";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : 'en';
    let laralelUrl = "/products";

    useEffect(() => {
        getNeedles(local+laralelUrl, setItems);
    }, []);

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
			<section className="content-inner-3 pt-3 z-index-unset">
				<div className="container">
					<div className="row">
                        <SideBar categories={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <Product items={items?.products} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                    </div>
				</div>
			</section>
        </>
    );
}