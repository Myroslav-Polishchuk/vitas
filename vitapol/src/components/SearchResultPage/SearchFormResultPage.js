import React, { useCallback, useRef, useMemo, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import getI18Text from '../utils/i18n';

function SearchFormResultPage(props) {
    const history = useHistory();
    const formRef = useRef({});

    useEffect(() => {
        if (formRef && props.query) {
            formRef.current.query.value = props.query;
        }
    }, [formRef, props.query]);

    const { placeholder, foundResultText } = useMemo(() => {
        return {
            placeholder: getI18Text('searchFieldPlaceHolder', props.languageID),
            foundResultText: getI18Text('foundResultText', props.languageID)
        }
    }, [props.languageID]);

    const submitHadnler = useCallback((event) => {
        event.preventDefault();

        if (!formRef.current.query.value || formRef.current.query.value.length <= 2) {
            return;
        }

        history.push(`/search/${formRef.current.query.value}`);

    }, [history]);

    return <div className="searchFormWrapper">
        <form
            className="searchFormResultPage"
            onSubmit={submitHadnler}
            action="#"
            ref={formRef}
        >
            <input type="text" id="query" placeholder={placeholder} />
            <button type="submit" />
        </form>
        <p className="resultText">{`${foundResultText}: ${props.searchResultsCount}`}</p>
    </div>
}

export default SearchFormResultPage;