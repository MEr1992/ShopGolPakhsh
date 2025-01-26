"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Box, Frame } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({ id }){
    const { Lang,local } = useLang();
    const { laraAdmin } = useConfig();
    let { save,get } = useData();
    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/sliders"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    
    let uploadUrl = laraAdmin+"/upload/.-media-slider";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-slider";
    let uploadDir = 'media/slider/';
    
    useEffect(()=>{
        if(id != 0) get(url, component, "info");
    }, [id]);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return(
        <>
        <Frame>
            <Box>     
                <Input label="title" refItem={[component, "title"]} required="true" />
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />        
            </Box>
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>        
        </>
    );
}