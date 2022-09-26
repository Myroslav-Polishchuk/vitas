import React from 'react'

import './Admin.scss'

function TableHeaderSection({
    tablesObj,
    topAdminData,
    setTopAdminData,
    children,
    signOut
}) {
    const tablesKeysArr = tablesObj ? Object.keys(tablesObj) : [];
    const TableHeader = <ul className="listTables">
        {tablesKeysArr.map(tableKey => {
            const table = tablesObj[tableKey];
            const tableName = table.id;
            const classStyle = topAdminData.tableName === tableName ? "active" : "";
            const click = () => {
                setTopAdminData({
                    isTable: true,
                    tableName: tableName,
                    dataID: ''
                });
            }

            return <li
                className={classStyle}
                onClick={click}
                key={tableName}
            >
                {table.translate}
            </li>
        })}
    </ul>;

    return <div className="globalWrapper">
        <div className="admin_block">
            <p className="admin_h1">Таблиці</p>
            <button onClick={signOut}>Вихід з адміну</button>
        </div>
        {TableHeader}
        {children}
    </div>
}

export default TableHeaderSection;

