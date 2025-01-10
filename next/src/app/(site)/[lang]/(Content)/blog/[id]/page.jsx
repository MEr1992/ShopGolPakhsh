"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Shop)/blogZR/Banner";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let  { getNeedles } = useData();
    let [items, setItems] = useState();
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';
    const formUrl = "/blog"; 
    const laralelUrl = "/blog"; 

    useEffect(() => {
        getNeedles(local+laralelUrl+"/"+id, setItems);
    }, []);
    let blog = items?.blog;

    return(
        <>
            <div className="page-content bg-light">
                <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            </div>
            <section className="content-inner">
                <div className="container">
                    <div className="row about-style2 align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 m-b30">
                            <div className="about-thumb">
                                <img src={mediaPath+"/blog/"+blog?.thumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content">
                                <div className="section-head style-1 d-block">
                                    <h3 className="title">{blog?.title}</h3>
                                    <h6 className="name">{blog?.subject?.["title_"+local]}</h6> 
                                    <span className="position">{blog?.created_at}</span> 
                                    <p dangerouslySetInnerHTML={{ __html: blog?.text }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}