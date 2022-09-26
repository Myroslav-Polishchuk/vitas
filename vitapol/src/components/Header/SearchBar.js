import React, {useRef, useCallback} from 'react'

import getI18Text from '../../components/utils/i18n'

const placeholderText = getI18Text('searchPlaceHolderText', 'ukr');

export default React.memo(() => {
	const searchTextRef = useRef();

	const submitHandler = useCallback(e => {
		if (e) {
			e.preventDefault();
		}
	}, []);

	return <>
		<form className="searchForm" onSubmit={submitHandler}>
			<input 
				type="text"
				placeholder={placeholderText}
				className="searchBar"
				ref={searchTextRef}
			/>
			<button type="submit" className="submitBtn" />
		</form>	
	</>
});