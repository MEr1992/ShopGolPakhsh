"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/[id]/Banner";
import { Index } from "@/app/(site)/[lang]/(Shop)/products/[id]/Index";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/[id]/SideBar";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';
    const formUrl = "/products"; 
    const laralelUrl = "/products"; 

    // useEffect(() => {
    //     getNeedles(local+laralelUrl+"/"+id, setItems);
    // }, []);

    return(
        <>11
            {/* <Banner Lang={Lang} />
			<section className="content-inner-3 pt-3 z-index-unset">
				<div className="container">
					<div className="row">
                        <SideBar />
                        <Index />
                    </div>
				</div>
			</section> */}
        </>
    );
}