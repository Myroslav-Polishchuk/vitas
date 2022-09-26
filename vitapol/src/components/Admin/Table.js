import React from 'react'

function Table({
    tableName,
    tableData,
    columnArr,
    setRegime,
    setCurrentDataID
}) {
    let columnsName = [];
    let dataTR = [];

    if (columnArr.length) {
        columnsName = columnArr.map(name => {
            return <td>{name}</td>
        });

        dataTR = tableData.map(data => {
            return <tr>
                {columnArr.map(col => {
                    const click = () => {
                        if (col === 'id') {
                            setCurrentDataID(data[col]);
                        }
                        setRegime('put');
                    }
                    if (typeof data[col] === 'string') {
                        return <td onClick={click}>{data[col].slice(0, 100)}</td>
                    } else {
                        return <td onClick={click}>{data[col]}</td>
                    }
                })}
            </tr>
        })
    }

    const btn = tableName ? <button onClick={() => setRegime('post')}>Створити</button> : '';

    return <table>
        <caption>{tableName} {btn}</caption>
        <tr>{columnsName}</tr>
        {dataTR}
    </table>
}

export default Table;