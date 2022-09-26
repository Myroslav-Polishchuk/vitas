import React, {useMemo, useState, useEffect, useCallback, useRef} from 'react'
import './Admin.scss'
import Pagination from '../../components/Pagination/Pagination';

function TableFormik({
    columns = [],
    limitPerPage,
    tableName,
    axios,
    setTopAdminData,
    tableTranslate
}) {
    const [tableData, setTableData] = useState([]);
    const [itemLength, setItemLength] = useState(0);
    const [activePagination, setActivePagination] = useState(1);
    const [searchOptions, setSearchOptions] = useState({
        active: false,
        name: '',
        value: ''
    });
    const [sortType, setSortType] = useState({
        column: 'id',
        growth: false,
        isSorted: false
    });

	const searchRef = useRef();

    useEffect(() => {
        setTableData([]);
        setItemLength(0);
        setActivePagination(1);
        setSearchOptions({
            active: false,
            name: '',
            value: ''
        });
        setSortType({
            column: 'id',
            growth: false
        });
        searchRef.current.searchFilter.value = '';
        searchRef.current.searchValue.value = '';
    }, [tableName]);

    useEffect(() => {
        if (tableData && tableData.length && !sortType.isSorted) {
            tableData.sort((first, second) => {
                const firstValue = first[sortType.column];
                const secondValue = second[sortType.column];

                if (sortType.growth) {
                    if (firstValue > secondValue) {
                        return 1;
                    } else if (firstValue < secondValue) {
                        return -1;
                    } else {
                        return 0;
                    }
                } else {
                    if (firstValue < secondValue) {
                        return 1;
                    } else if (firstValue > secondValue) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });

            setTableData([...tableData]);
            setSortType({
                ...sortType,
                isSorted: true
            });

        }
    }, [sortType, tableData, setTableData, setSortType]);

    useEffect(() => {
        if (!tableName) {
            setTableData([]);
            setSortType({
                column: 'id',
                growth: false
            });
            return;
        }

        const options = {
            offset: limitPerPage * (activePagination - 1),
            limit: limitPerPage
        }

        if (searchOptions.active && searchOptions.name && searchOptions.value) {
            options.searchName = searchOptions.name;
            options.searchValue = searchOptions.value
        }

        axios.post('/table', options).then((response) => {
            if (response.status === 200) {
                setTableData(response.data.data);
                setSortType({
                    column: 'id',
                    growth: false
                });
            } else {
                console.log(`tableData Error status - ${tableName}`);
            }
        }).catch(err => {
            console.log(`Error tableData get=>/form/. Error: ${err}`)
        })
    }, [tableName, activePagination, axios, limitPerPage, searchOptions]);

    useEffect(() => {
        if (tableName) {
            const options = {}

            if (searchOptions.active && searchOptions.name && searchOptions.value) {
                options.searchName = searchOptions.name;
                options.searchValue = searchOptions.value
            }

            axios.post('/table/length', options).then(response => {
                if (response.status === 200) {
                    setItemLength(response.data.length);
                } else {
                    throw new Error('Recomendation Error');
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }, [tableName, axios, setItemLength, searchOptions]);

    const dataTR = useMemo(() => {
        if (columns.length) {
            return tableData.length ? tableData.map((data, index) => {
                const click = () => {
                    setTopAdminData({
                        isTable: false,
                        tableName: tableName,
                        dataID: data['id']
                    });
                    setActivePagination(1);
                }

                return <tr key={index}>
                    <td key={-1}><button onClick={click}>Редагувати</button></td>
                    {columns.map((col, index) => {
                        return <td key={index}>{String(data[col.name])}</td>
                    })}
                </tr>
            }) : [];
        }
    }, [columns, tableData, setTopAdminData, tableName, setActivePagination])

    const columnsName = useMemo(() => {
        const createClickHander = (columnID) => {
            return () => {
                setSortType({
                    column: columnID,
                    growth: sortType.column === columnID ? !sortType.growth : true
                });
            }
        };

        return columns.map((col, index) => {
            return <td onClick={createClickHander(col.name)} key={index}>{col.translate}</td>
        });
    }, [columns, setSortType, sortType]);

    const btn = useMemo(() => {
        return tableName ? <button onClick={() => {
            setActivePagination(1);
            setTopAdminData({
                isTable: false,
                tableName: tableName,
                dataID: ''
            })
        }}>Створити</button> : '';
    }, [tableName, setActivePagination, setTopAdminData]);

    const onSubmitSearchForm = useCallback((event) => {
        event.preventDefault();

        const {searchFilter, searchValue} = event.target.elements;

        if (searchFilter.value && searchValue.value) {
            setSearchOptions({
                active: true,
                name: searchFilter.value,
                value: searchValue.value
            });
            setActivePagination(1)
        }
    }, [setSearchOptions, setActivePagination]);

    const formSearch = useMemo(() => {
        return <form className="search" onSubmit={onSubmitSearchForm} ref={searchRef}>
            <select name="searchFilter">
                <option value={''}>Default</option>
                {columns.map(column => {
                    return <option value={column.name} key={column.name}>
                        {column.translate}
                    </option>
                })}
            </select>
            <input name="searchValue"/>
            <button type="submit">Шукати</button>
        </form>
    }, [columns, onSubmitSearchForm]);

    return <>
        <Pagination
            dataLength={itemLength}
            limitPerPage={limitPerPage}
            forcePage={activePagination - 1}
            paginationClassName={"AdminListPagination"}
            onPaginationChange={setActivePagination}
        />
        <table>
            <caption>
                {formSearch}
            </caption>
            <caption>{tableTranslate} {btn}</caption>
            <tbody>
                <tr>{[<td key={-1}></td>, ...columnsName]}</tr>
                {dataTR}
            </tbody>
        </table>
        <Pagination
            dataLength={itemLength}
            limitPerPage={limitPerPage}
            forcePage={activePagination - 1}
            paginationClassName={"AdminListPagination"}
            onPaginationChange={setActivePagination}
        />
    </>
}

export default TableFormik;