import React, {useState, useEffect, useCallback} from 'react'

import Component from '../../../components/Admin/Admin'
import {adminAxios} from '../../../components/axios'
import AdminAsk from './../../../components/Admin/AdminAsk';

const fileTables = ['Foto', 'File'];

function AdminPage() {
    const [tablesConfig, setTablesConfig] = useState([]);
    const [activeTable, setActiveTable] = useState({});
    const [data, setData] = useState([]);
    const [regime, setRegime] = useState('getAll');
    const [currentData, setCurrentData] = useState({});
    const [currentDataID, setCurrentDataID] = useState('');
    const [currentFormData, setCurrentFormData] = useState({});
    const [sendDataConfigMethod, setSendDataConfigMethod] = useState('');

    // const [showAdmin, setShowAdmin] = useState(false);
    // const [registationStatus, setRegistrationStatus] = useState(false);

    const formRef = React.createRef(null);

    // useEffect(() => {
    //     adminAxios
    //         .post('/check', {
    //             id: window.localStorage.getItem('magicBolt')
    //         })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 setShowAdmin(response.data.answer)
    //             } else {
    //                 throw new Error('Recomendation Error');
    //             }
    //         })
    // }, []);

    // useEffect(() => {
    //     if (registationStatus) {
    //         adminAxios
    //             .post('/getID', {
    //                 mail: formRef.current[0].value
    //             })
    //             .then(response => {
    //                 setRegistrationStatus('')
    //                 if (response.status === 200) {
    //                     if (response.data.answer) {
    //                         setShowAdmin(response.data.answer);
    //                         window.localStorage.setItem('magicBolt', response.data.id);
    //                     }
    //                 } else {
    //                     throw new Error('Recomendation Error');
    //                 }
    //             })
    //     }
    // }, [registationStatus])

    // const submitRegistrationStatus = useCallback((e) => {
    //     e.preventDefault();
    //     setRegistrationStatus(true);
    // }, []);

    useEffect(() => {
        if (regime === 'put' && activeTable && activeTable.name && currentDataID) {
            adminAxios.get(`/${activeTable.name}/${currentDataID}`)
            .then(response => {
                if (response.status === 200) {
                    setCurrentData(response.data);
                    setCurrentDataID('');
                } else {
                    setCurrentDataID('');
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

        }
    }, [regime, currentDataID, activeTable]);

    useEffect(() => {
        if (sendDataConfigMethod && activeTable && activeTable.name) {
            if (fileTables.indexOf(activeTable.name) === -1) {
                adminAxios({
                    method: sendDataConfigMethod,
                    url: `/form/${activeTable.name}`,
                    data: getFormData(formRef)
                })
                .then(response => {
                    if (response.status === 200) {
                        setSendDataConfigMethod('');
                        setRegime('getAll');
                    } else {
                        setSendDataConfigMethod('');
                        setRegime('getAll');
                        throw new Error('Recomendation Error');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            } else {
                adminAxios({
                    method: sendDataConfigMethod,
                    url: `/formData/${activeTable.name}`,
                    data: getFormData(formRef, true),
                    headers: { 'content-type': 'multipart/form-data' }
                })
                .then(response => {
                    if (response.status === 200) {
                        setSendDataConfigMethod('');
                        setRegime('getAll');
                    } else {
                        setSendDataConfigMethod('');
                        setRegime('getAll');
                        throw new Error('Recomendation Error');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }

        }
    }, [sendDataConfigMethod])

    useEffect(() => {
        adminAxios.get('/')
            .then(response => {
                if (response.status === 200) {
                    setTablesConfig(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (activeTable.name && regime === 'getAll') {
            adminAxios.get(`/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

        }
    }, [activeTable, regime]);

    useEffect(() => {
        if (activeTable.name && regime === 'post') {
            adminAxios.get(`/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

        }
    }, [activeTable, regime]);

    useEffect(() => {
        if (activeTable.name) {
            adminAxios.get(`/form/${activeTable.name}`)
            .then(response => {
                if (response.status === 200) {
                    setCurrentFormData(response.data);
                } else {
                    throw new Error('Recomendation Error');
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [activeTable, regime]);

    // if (!showAdmin) {
    //     return <AdminAsk
    //         formRef={formRef}
    //         submitRegistrationStatus={submitRegistrationStatus}
    //     />
    // } else {
    return <Component
        tablesConfig={tablesConfig}
        activeTable={activeTable}
        setActiveTable={setActiveTable}
        tableData={data}
        regime={regime}
        setRegime={setRegime}
        currentFormData={currentFormData}
        formRef={formRef}
        setSendDataConfigMethod={setSendDataConfigMethod}
        currentData={currentData}
        setCurrentDataID={setCurrentDataID}
    />

}

export default AdminPage;

function getFormData(formRef, isForm) {
    const formData = new FormData();
    const data = {
        formData: {}
    };
    if (formRef && isForm) {
        for (let i = 0; i < formRef.current.length; i++) {
            const el = formRef.current[i];
            if (el.name && el.value && el.type !== 'file') {
                formData.append(el.name, el.value);
            } else if (el.type === 'file' && el.files[0]) {
                formData.append(el.name, el.files[0]);
            }
        }
    } else if (formRef) {
        for (let i = 0; i < formRef.current.length; i++) {
            const el = formRef.current[i];

            if ([]) {

            }

            if (el.name === 'date') {
                data.formData[el.name] = el.value || new Date;
                continue;
            }
            if (el.name && el.value) {
                if (el.name in data.formData) {
                    if (typeof data.formData[el.name] === 'object') {
                        data.formData[el.name].push(el.value);
                    } else {
                        data.formData[el.name] = [data.formData[el.name], el.value];
                    }
                } else {
                    data.formData[el.name] = el.type === 'checkbox' ? el.checked : el.value;
                }
            }
        }
    }
    return isForm ? formData : data;
}

