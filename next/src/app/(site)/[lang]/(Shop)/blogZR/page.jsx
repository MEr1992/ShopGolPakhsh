"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/blogZR/Banner";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/blogZR/SideBar";
import { ItemPage } from "./ItemPage";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : 'en';
    let laralelUrl = "/blog";

    useEffect(() => {
        getNeedles(local+laralelUrl, setItems);
    }, []);
// console.log(items);

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
			<section className="content-inner-3 pt-3 z-index-unset">
				<div className="container">
					<div className="row">
                        <SideBar categories={items?.topics} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <ItemPage items={items?.collection} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                    </div>
				</div>
			</section>
        </>
    );
}