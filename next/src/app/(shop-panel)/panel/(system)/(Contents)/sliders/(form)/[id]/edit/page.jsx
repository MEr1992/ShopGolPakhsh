"use client";
import Form from '@/app/(shop-panel)/panel/(system)/(Contents)/sliders/(form)/form';

export default function Edit({ params }){
    return(
        <Form id={params?.id}></Form>
    );
}