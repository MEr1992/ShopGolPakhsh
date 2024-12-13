"use client"
export const Keywords = ({ assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="widget widget_search">
				<div className="form-group">
					<div className="input-group">
						<input name="dzSearch" required="required" type="search" className="form-control" placeholder="Search Product"/>
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