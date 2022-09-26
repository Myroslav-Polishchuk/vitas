import React, {useState, useEffect, useMemo} from 'react'

import Component from '../../../components/New/New'
import getI18Text from './../../../components/utils/i18n';
import {newsAxios} from '../../../components/axios'

function NewPage(props) {
    const [newData, setNewData] = useState({});

    useEffect(() => {
        newsAxios.get(`/${props.match.params.newsID}`)
        .then(response => {
            if (response.status === 200) {
                setNewData(response.data);
            } else {
                throw new Error('Recomendation Error');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, [props.match.params.newsID])

    const {datePublicText, anchorNewsLinkText, sectionData} = useMemo(() => {
        return {
            datePublicText: getI18Text('datePublic', props.languageID),
            anchorNewsLinkText: getI18Text('anchorNewsLinkText', props.languageID),
            sectionData: {
                breadcrumbsData: [
                    {
                        text: getI18Text("newsTitle", props.languageID),
                        url: "/news"
                    },
                    {
                        text: newData.title
                    }
                ],
                languageID: props.languageID
            }
        }
    }, [props.languageID, newData])

    return <Component
        sectionData={sectionData}
        datePublicText={datePublicText}
        newData={newData}
        anchorNewsLinkText={anchorNewsLinkText}
    />
}

export default NewPage;