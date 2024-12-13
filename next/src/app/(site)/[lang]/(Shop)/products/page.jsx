"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/Banner";
import { List } from "@/app/(site)/[lang]/(Shop)/products/List";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/SideBar";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    const local = params?.lang ? params?.lang : 'en';

    // useEffect(() => {
    //     getNeedles(local+laralelUrl+"/"+id, setItems);
    // }, []);

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
			<section className="content-inner-3 pt-3 z-index-unset">
				<div className="container">
					<div className="row">
                        <SideBar assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <List assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                    </div>
				</div>
			</section>
        </>
    );
}