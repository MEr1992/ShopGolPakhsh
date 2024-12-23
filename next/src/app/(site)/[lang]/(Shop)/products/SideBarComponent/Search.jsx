"use client"
export const Search = ({ assetsPath,mediaPath,local,Lang }) => {
	let [search, setSearch] = useState();
	const searchKeyUp = (event) => { 
		if(event.keyCode == 13)
			router.push("/"+local+"/courses?search="+search) 
	}

    return(
		<>
			<div className="widget widget_search">
				<div className="form-group">
					<div className="input-group">
						<input name="dzSearch" required="required" type="search" className="form-control" placeholder={Lang("public.search_product")}
							onChange={(e) => setSearch(e.target.value)} 
							onKeyUp={(e)=>searchKeyUp(e)}
						/>
						<div className="input-group-addon">
							<button name="submit" value="Submit" type="submit" className="btn">
								<i className="icon feather icon-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
    	</>
	);
}