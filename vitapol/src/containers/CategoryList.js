import React, {useState, useEffect} from 'react';
import Component from './../components/CategoryList/CategoryList';
import {articlesAxios, recomendationAxios, videoAxios} from './../components/axios'

const axioses = {
    articles: articlesAxios,
    recomendations: recomendationAxios,
    videosList: videoAxios
};

function CategoryList(props) {
    const [fullCategory, setFullCategory] = useState([]);

    useEffect(() => {
        if (props.categoryName) {
            axioses[props.categoryName]
                .get(`/categories`)
                .then(response => {
                    if (response.status === 200) {
                        if (props.additionalCategory) {
                            setFullCategory([...response.data, props.additionalCategory]);
                        } else {
                            setFullCategory(response.data);
                        }
                    } else {
                        throw new Error('Recomendation Error');
                    }
                })
        }
    }, [props.categoryName, props.additionalCategory])

    return <Component {...props} categories={fullCategory} />
}

export default CategoryList;