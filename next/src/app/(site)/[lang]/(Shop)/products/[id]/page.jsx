"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { GalleryProduct,InfoProduct,RelatedProduct,StepProduct,TabsProduct } from "@/app/(site)/[lang]/(Shop)/products/[id]/ProductComponent";
import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";
import { Error404 } from "@/Theme/Site/Components/Public/Error404";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';
    const formUrl = "/products"; 
    const laralelUrl = "/products"; 

    useEffect(() => {
        getNeedles(local+laralelUrl+"/"+id, setItems);
    }, []);
    // console.log('items');
    // console.log(items);

    return(
        <>
            {(items==undefined)?
                <Error404 />
            :
                <div className="page-content bg-light">
                    <div className="d-sm-flex justify-content-between container-fluid py-3">
                        {/* <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="index.html"> Home</a></li>
                                <li className="breadcrumb-item">Product Default</li>
                            </ul>
                        </nav> */}
                        <BreadCrumb />
                    </div>
                    <InfoProduct item={items?.product} assetsPath={assetsPath} Lang={Lang} local={local} />
                    <TabsProduct item={items?.product} assetsPath={assetsPath} Lang={Lang} local={local} />
                    <RelatedProduct items={items} assetsPath={assetsPath} />
                </div>
            }
        </>
    );
}