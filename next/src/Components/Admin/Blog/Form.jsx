"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Frame,Input,Button,ButtonContainer,CheckBox, Box } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export default function Form({id}){
    const { Lang } = useLang();
    const { laraAdmin } = useConfig();
    let component = useFormRefs();
    const router = useRouter();
    let { save, get } = useData();
    const formUrl = "/blogs"; 
    let uploadUrl = laraAdmin+"/upload/.-media-blogs";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-blogs";

    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return(
        <>
            <Frame title={Lang(["public.blogs"])}>
                <Box>
                <Input className="col-span-12" label="title" refItem={[component, "title"]} required="true" />
                <Dropzone className="col-span-12" label={Lang(["public.thumb","(upload:1)"])} refItem={[component, "thumb"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} required="true" />
                <CKEditor   label="text" refItem={[component, "text"]} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                    
                </Box>
                
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}