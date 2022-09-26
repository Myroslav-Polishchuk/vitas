import React, {useState, useEffect, useCallback} from 'react';
import AdminPageFormik from './AdminPageFormik';
import FieldFormikComp from '../../../components/Admin/formik/FieldFormikComp'
import {
    Formik,
    Form
} from 'formik';
import * as Yup from 'yup';
import {adminAxios} from '../../../components/axios'
import './Authorization.scss'

const validation = Yup.object({
    word: Yup.string().required('Обовязкове поле')
});

function Authorization(props) {
    const [userAuthorized, setUserAuthorized] = useState(false);
    const [userCode, setUserCode] = useState(window.localStorage.getItem('userCode'));
    const [userRule, setUserRule] = useState(window.localStorage.getItem('userRule'));

    useEffect(() => {
        if (userCode) {
            adminAxios.post('/checkCode', {
                userCode: userCode
            }).then(response => {
                if (response.status === 200) {
                    if (response.data.isValid) {
                        setUserAuthorized(true);
                    } else {
                        window.localStorage.removeItem('userCode');
                        setUserAuthorized(false);
                    }
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [userCode]);

    const signOut = useCallback(() => {
        setUserAuthorized(false);

        setUserCode('');
        window.localStorage.removeItem('userCode');

        setUserRule('');
        window.localStorage.removeItem('userRule');
    }, [])

    const onSubmit = useCallback((values) => {
        if (values.word) {
            adminAxios.post('/getCode', {
                word: values.word
            }).then(response => {
                if (response.status === 200) {
                    setUserCode(response.data.code);
                    window.localStorage.setItem('userCode', response.data.code);

                    setUserRule(response.data.rule)
                    window.localStorage.setItem('userRule', response.data.rule);
                } else {
                    setUserCode('');
                    window.localStorage.removeItem('userCode');

                    setUserRule('')
                    window.localStorage.removeItem('userRule');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, []);

    const AuthorizationForm = <div className="globalWrapper adminFormikPage">
        <Formik
            initialValues={{
                word: ''
            }}
            onSubmit={onSubmit}
            validationSchema={validation}
        >
            <Form className="AuthorizationForm">
                <FieldFormikComp name={'word'} type={'text'} options={{}}/>
                <button type={'submit'}>Ввійти</button>
            </Form>
        </Formik>
    </div>

    return userAuthorized ? <AdminPageFormik {...props} userRule={userRule} signOut={signOut}/> : AuthorizationForm;
};

export default Authorization;