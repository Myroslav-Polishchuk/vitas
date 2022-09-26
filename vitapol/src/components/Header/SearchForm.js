import React, { useCallback, useRef, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import getI18Text from '../../components/utils/i18n';

function SearchForm(props) {
    const history = useHistory();
    const formRef = useRef(null);

    const placeholder = useMemo(() => {
        return getI18Text('searchFieldPlaceHolder', props.languageID)
    }, [props.languageID])

    const submitHadnler = useCallback((event) => {
        event.preventDefault();

        if (!formRef.current.query.value) {
            return;
        }

        history.push(`/search/${formRef.current.query.value}`);

    }, [history]);

    return <form
        className="searchForm"
        onSubmit={submitHadnler}
        action="#"
        ref={formRef}
    >
        <input type="text" id="query" placeholder={placeholder} />
        <button type="submit" />
    </form>
}

export default SearchForm;