import React, {useState, useEffect, useCallback} from 'react'

import axioses from '../axios'

const axioeseRef = {
    journal: {
        axios: axioses.journalAxios,
        valueName: 'name'
    },
    author: {
        axios: axioses.authorsAxios,
        valueName: 'name'
    },
    recomendations: axioses.recomendationsAxios,
    recomendation: axioses.recomendationAxios,
    category: {
        axios: axioses.categoriesAxios,
        valueName: 'ukr'
    },
    img: {
        axios: axioses.imgAxios,
        valueName: 'name'
    },
    video: axioses.videoAxios,
    news: axioses.newsAxios,
    articles: axioses.articlesAxios,
    admin: axioses.adminAxios,
    activities: axioses.activitiesAxios,
    organizations: axioses.organizationsAxio,
    file: {
        axios: axioses.fileAxios,
        valueName: 'name'
    }
};

function Input({
    fieldType,
    idName,
    placeholder,
    isIgnore,
    value
}) {
    const [valueState, setValue] = useState(value);
    const [references, setReferences] = useState([]);
    const [valueName, setValueName] = useState('');

    const addSelect = useCallback(() => {
        const valueStateArr = typeof valueState === 'object' ? [...valueState] : [valueState];
        setValue([...valueStateArr, '']);
    }, [valueState]);

    const changeHandler = (e) => {
        if (typeof valueState === 'string') {
            setValue(e.target.value)
        } else if (typeof valueState === 'object') {
            const newArrayValue = valueState.map((value, index) => {
                if (index === +e.target.attributes.index.value) {
                    return e.target.value;
                }
                return value;
            });

            setValue(newArrayValue);
        }
    };

    useEffect(() => {
        setValue(value);
    }, [value]);

    useEffect(() => {
        if (typeof fieldType === 'object' && (fieldType.subType === 'reference' || fieldType.subType === 'referenceArr')) {
            const axiosRef = axioeseRef[fieldType.table];

            if (axiosRef) {
                axiosRef.axios.get('/')
                .then(response => {
                    if (response.status === 200) {
                        setValueName(axiosRef.valueName)
                        setReferences(response.data);
                    } else {
                        throw new Error('Recomendation Error');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }, [])

    if (typeof fieldType !== 'object') {
        switch(fieldType) {
            case 'text': 
                return <label>
                    {placeholder}
                    <input
                        type="text"
                        name={idName}
                        placeholder={placeholder}
                        disabled={isIgnore}
                        value={valueState}
                        onChange={changeHandler}
                    />
                </label>
            case 'checkbox':
                return <label>
                    {placeholder}
                    <input
                        type="checkbox"
                        name={idName}
                        disabled={isIgnore}
                        checked={valueState}
                        onChange={(e) => {setValue(e.target.checked)}}
                    />
                </label>
            case 'textarea':
                return <label>
                    {placeholder}
                    <textarea
                        wrap='hard'
                        type="checkbox"
                        name={idName}
                        disabled={isIgnore}
                        value={valueState}
                        onChange={changeHandler}
                    />
                </label>
            case 'file': 
                return <label>
                    {placeholder}
                    <input
                        type="file"
                        name={idName}
                    />
                </label>
        }
    } else {
        switch(fieldType.subType) {
            case 'reference': 
                return <label>
                    Text: {placeholder || fieldType.placeholder}
                    <select name={idName}>
                        <option value={''}>Default</option>
                        {references.map(ref => {
                            return <option value={ref.id} selected={valueState === ref.id}>{ref[valueName]}</option>
                        })}
                    </select>
                </label>
            case 'referenceArr':
                const valueStateArr = typeof valueState === 'object' ? [...valueState] : [valueState]; 
                return <label>
                    {placeholder}
                    {valueState && valueStateArr.map(v => {
                        return <select name={idName}>
                            <option value={''}>Default</option>
                            {references.map(ref => {
                                return <option value={ref.id} selected={v === ref.id}>{ref[valueName]}</option>
                            })}
                        </select>
                    })}
                    <button onClick={addSelect}>Добавити Select</button>
                </label>
            case 'array': 
                return <label>
                    {placeholder}
                    {valueState && valueState.map((v, index) => {
                        return <input
                            type="text"
                            name={idName}
                            placeholder={placeholder}
                            disabled={isIgnore}
                            value={v.value}
                            onChange={changeHandler}
                            index={index}
                        />
                    })}
                    <button onClick={addSelect}>Добавити поле</button>
                </label>
        }
    }

    return '';
}

export default Input;