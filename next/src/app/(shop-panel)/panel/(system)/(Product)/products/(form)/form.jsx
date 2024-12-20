"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Box, Textarea, SelectTail } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({id}){
    const { Lang,local } = useLang();
    const { laraAdmin } = useConfig();
    let { save,get,getNeedles} = useData();
    let [needles, setNeedles] = useState();

    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/products"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    
    useEffect(()=>{
        getNeedles(laraAdmin+'/products/get-needles', setNeedles);
        if(id != 0) get(url, component, "info");
    }, [id]);

    let uploadUrl = laraAdmin+"/upload/.-media-product";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-product";
    let uploadDir = 'media/product/';

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box>     
                <Input label="product" className="col-span-12" refItem={[component, "name"]} required="true" />
                <Input type="price"  refItem={[component, "price"]} required="true" />
                <Input refItem={[component, "discount"]} />
                <SelectTail label="category" refItem={[component, "category_id"]} 
                            required="true"
                            data={needles?.category}
                            titleKey="title_fa"
                        />                
                <SelectTail label="brand" refItem={[component, "brand_id"]} 
                            required="true"
                            data={needles?.brand} 
                            titleKey="name_fa"
                        />                
                <Textarea  refItem={[component, "usage"]} required="true"/>
                <Textarea  refItem={[component, "description"]} required="true"/>
                <Textarea  refItem={[component, "review"]} required="true"/>
                <Dropzone  refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />        
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>        
        </>;
}