import React from 'react'

import Table from './Table'
import Form from './Form'

import './Admin.scss'

function Admin({
    tablesConfig,
    activeTable,
    setActiveTable,
    tableData,
    regime,
    setRegime,
    currentFormData,
    formRef,
    setSendDataConfigMethod,
    currentData,
    setCurrentDataID
}) {
    const ListTables = <ul className="listTables">
        {tablesConfig.map(table => {
            const classStyle = activeTable.name === table.name ? "active" : "";
            const click = () => {
                setActiveTable(table);
                setRegime('getAll');
            }

            return <li
                className={classStyle}
                onClick={click}
                key={table.name}
            >
                {table.name}
            </li>
        })}
    </ul>;

    let mainPart = '';

    switch(regime) {
        case 'getAll':
            mainPart = <Table
                tableName={activeTable.name}
                tableData={tableData}
                columnArr={getColumnNames(tableData)}
                setRegime={setRegime}
                setCurrentDataID={setCurrentDataID}
            />
            break;
        case 'post':
            mainPart = <Form
                tableName={activeTable.name}
                currentFormData={currentFormData}
                formRef={formRef}
                sendPost={() => {setSendDataConfigMethod('post')}}
            />
            break;
        case 'put':
            mainPart = <Form
                tableName={activeTable.name}
                currentFormData={currentFormData}
                formRef={formRef}
                sendPut={() => {setSendDataConfigMethod('put')}}
                sendDelete={() => {setSendDataConfigMethod('delete')}}
                currentData={currentData}
            />
            break;
    }

    return <div className="globalWrapper">
        <h1 className="admin_h1">Таблиці</h1>
        {ListTables}
        {mainPart}
    </div>
}

export default Admin;

const ignoreColumns = [
    'ID',
    '__v'
];

const disabledFields = [
    'id',
    '__v'
];

function getColumnNames(tableData) {
    if (tableData && tableData[0]) {
        const data = tableData[0];
        let columnArr = Object.keys(data);
        columnArr = columnArr.length ? columnArr.filter(col => {
            return !ignoreColumns.some(ign => {
                const ans = col.indexOf(ign) >= 0;
                return ans;
            })
        }).filter(name => {
            return typeof data[name] !== 'object'
        }) : [];

        return columnArr;
    } else {
        return [];
    }
}

function getColumnNamesAll(tableData) {
    if (tableData && tableData[0]) {
        const data = tableData[0];
        let columnArr = Object.keys(data);
        return columnArr.map(col => {
            if (disabledFields.some(ign => col.indexOf(ign) >= 0)) {
                return {
                    name: col,
                    isDisabled: true
                }
            } else {
                return {
                    name: col,
                    isDisabled: false
                }
            }
        })
    } else {
        return [];
    }
}


