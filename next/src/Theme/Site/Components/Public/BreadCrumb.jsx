"use client"
import { useLang } from "@/lib/lang";

export const BreadCrumb = () => {
	const { Lang } = useLang();

	return(
		<>
			<nav aria-label="breadcrumb" className="breadcrumb-row">
				<ul className="breadcrumb">
					<li className="breadcrumb-item"><a href="index.html"> {Lang("public.home")}</a></li>
					<li className="breadcrumb-item">{Lang("public.products")}</li>
				</ul>
			</nav>
    	</>
	);
}