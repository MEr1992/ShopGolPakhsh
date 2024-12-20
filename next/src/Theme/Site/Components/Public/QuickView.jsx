"use client"
export const QuickView = ({ item,assetsPath,mediaPath,local,Lang }) => {
    return(
		<>
			<a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
				<i className="fa-solid fa-eye d-md-none d-block"></i>
				<span className="d-md-block d-none">{Lang("public.quick_view")}</span>
			</a>
    	</>
	);
}