"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon,Pic } from "@/Theme/Midone/Utils";

export default function List(){
    const { Lang,local } = useLang();
    const { laraAdmin,nextAdmin,mediaPath } = useConfig();
    const { destroy } = useData();
    const formUrl = nextAdmin+"/sliders"; 

    let info = {
        insertLink: formUrl+"/new",
        url: laraAdmin+"/sliders",
        columns: [
            {label: "", jsx:(item)=>
                <Pic src={mediaPath+"/slider/"+item?.image} defaultImg={`${mediaPath}/public/default/avatar.png`} key={"img"+item?.image} classImg="" />},
            {label: "title", field: "title"},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "", sort:false, width:"110px", jsx:(item)=>
                <>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+"/sliders/"+item.id)} />
                        
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}