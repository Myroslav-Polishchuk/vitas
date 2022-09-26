import React, {useState, useRef, useCallback, useMemo} from 'react'

import {videoAxios, newsAxios, articlesAxios, authorsAxios, recomendationsAxios} from '../../axios'
import CategoriesForm from './CategoriesForm';
import VideoForm from './VideoForm';


function Form({
    activeTable
}) {
    const [searchResultData, setSearchResultData] = useState([]);
    const [activeData, setActiveData] = useState({});
    const searchField = useRef(null);
    const formRef = useRef(null);

    const {axios, FormComponent} = useMemo(
        getFormData(activeTable),
        [activeTable]
    );

    const findData = useCallback(
        findDataCallback(searchField, axios, setSearchResultData),
        [axios]
    );

    const updateData = useCallback(
        updateDataCallback(axios, setSearchResultData),
        [axios]
    );

    const createData = useCallback(
        createDataCallback(axios, setSearchResultData),
        [axios]
    );
    const deleteData = useCallback(
        deleteDataCallback(axios, setSearchResultData),
        [axios]
    );

    const cleanForm = useCallback(() => {
        formRef.reset();
    }, [formRef]);

    return <div>
        <ul>
            <li>
                <input type="text" ref={searchField} placeholder="Знайти все або по ID"/>
                <button onClick={findData}>Знайти</button>
            </li>
            <li>
                <button>
                    Створити
                </button>
            </li>
        </ul>
        <ul>
            <li>
                Назви стопчиків
            </li>
            <li>
                
            </li>
        </ul>
        <FormComponent 
            activeData={activeData}
            formRef={formRef}
            cleanForm={cleanForm}
            updateData={updateData}
            createData={createData}
            deleteData={deleteData}
            />
    </div>
}

export default Form;

function getFormData(categoryType) {
    switch(categoryType) {
        case 'categories':
            return CategoriesForm;
        case 'videos': 
            return {
                axios: videoAxios,
                FormComponent: VideoForm
            };
        default: 
            return null;
    }
}

function findDataCallback(searchField, axios, setSearchResultData) {
    return () => {
        axios.get(`/${searchField.value}`)
            .then(response => {
                if (response.status === 200) {
                    setSearchResultData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

function updateDataCallback(axios, setSearchResultData) {
    return (data) => {
        axios.put(`/`, data)
            .then(response => {
                if (response.status === 200) {
                    setSearchResultData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

function createDataCallback(axios, setSearchResultData) {
    return (data) => {
        axios.post(`/`, data)
            .then(response => {
                if (response.status === 200) {
                    setSearchResultData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

function deleteDataCallback(axios, setSearchResultData) {
    return (ID) => {
        axios.delete(`/${ID}`)
        .then(response => {
            if (response.status === 200) {
                setSearchResultData(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        });
    }
}