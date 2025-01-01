"use client"
import React, { useReducer } from 'react';
import { initialState, reducer } from '@/app/(site)/[lang]/PageTools/Reducer/ProductReducer';

export const Reset = ({ Lang,dispatch }) => {
	const [state, localDispatch] = useReducer(reducer, initialState);
	const handleReset = () => {
		localDispatch({ type: 'RESET' });
		dispatch({ type: 'RESET' });
	};

    return(
		<>
			<a href="javascript:void(0);" className="btn btn-sm font-14 btn-secondary btn-sharp" onClick={handleReset}>
				{Lang("public.reset_title_btn")}
			</a>
    	</>
	);
}