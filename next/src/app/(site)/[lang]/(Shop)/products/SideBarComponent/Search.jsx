"use client"
import React, { useReducer } from 'react';
import { initialState, reducer } from '@/app/(site)/[lang]/(Shop)/Reducer/ReducerProduct';

export const Search = ({ assetsPath,mediaPath,local,Lang,dispatch }) => {
	const [state, localDispatch] = useReducer(reducer, initialState);
	const handleFilter = (e) => {
		if (e.key === 'Enter') {
			const search = e.target.value;
			localDispatch({ type: 'SET_SEARCH', filter: search });
			dispatch({ type: 'SET_SEARCH', filter: search });
		}
    };

    return(
		<>
			<div className="widget widget_search">
				<div className="form-group">
					<div className="input-group">
						<input name="dzSearch" required="required" type="search" className="form-control" placeholder={Lang("public.search_product")}
							onKeyDown={handleFilter}
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