import React, {useState, useMemo} from 'react'

import TableHeaderSection from '../../../components/Admin/TableHeaderSection'
import TableData from '../../../components/Admin/TableFormik';

import allAxioses from '../../../components/axios'

const tablesOptions = {
    "Advertising": {
        id: "Advertising",
        translate: "Рекламні банери",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "link",
                translate: "Посилання"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/AdvertisingForm'),
        axios: allAxioses.advertisingAxios,
        limitPerPage: 50
    },
    "Article": {
        id: "Article",
        translate: "Статті",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "main_title",
                translate: "Назва"
            },
            // {
            //     name: "meta_name",
            //     translate: "Журнал"
            // },
            {
                name: "isOnline",
                translate: "онлайн"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/ArticleForm'),
        axios: allAxioses.articlesAxios,
        limitPerPage: 50,
        previewLink: 'article/preview'
    },
    "Author": {
        id: "Author",
        translate: "Автори",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "secondName",
                translate: "Прізвище"
            },
            {
                name: "firstName",
                translate: "Ім'я"
            },
            {
                name: "thirdName",
                translate: "По-Батькові"
            },
            {
                name: "workplace",
                translate: "Місце роботи"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/AuthorForm'),
        axios: allAxioses.authorsAxios,
        searchFilterDefault: 'secondName',
        limitPerPage: 50
    },
    "Category": {
        id: "Category",
        translate: "Спеціальності",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "eng",
                translate: "Англійською"
            },
            {
                name: "ukr",
                translate: "Українською"
            },
            {
                name: "rus",
                translate: "Російською"
            },
            {
                name: "sortPositionHeader",
                translate: "Номер порядку спеціальності в Header"
            },
            {
                name: "sortPositionArticleBlock",
                translate: "Номер порядку спеціальності в блоку статей"
            },
            {
                name: "imgLink",
                translate: "Малюнок на index"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/CategoryForm'),
        axios: allAxioses.categoriesAxios,
        limitPerPage: 50
    },
    "Event": {
        id: "Event",
        translate: "Банери конференцій",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "name",
                translate: "Назва події"
            },
            {
                name: "url",
                translate: "Посилання"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/EventForm'),
        axios: allAxioses.activitiesAxios,
        limitPerPage: 50
    },
    "Journal": {
        id: "Journal",
        translate: "Блок Журнали",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "url",
                translate: "Посилання"
            },
            {
                name: "name",
                translate: "Назва"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/JournalForm'),
        axios: allAxioses.journalAxios,
        limitPerPage: 50
    },
    "News": {
        id: "News",
        translate: "Новини",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "title",
                translate: "Заголовок"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "isMainNews",
                translate: "Актуальна новина"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/NewsForm'),
        axios: allAxioses.newsAxios,
        limitPerPage: 50
    },
    "Organization": {
        id: "Organization",
        translate: "Банери мед. асоціацій",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "name",
                translate: "Назва"
            },
            {
                name: "url",
                translate: "Посилання"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/OrganizationForm'),
        axios: allAxioses.organizationsAxios,
        limitPerPage: 50
    },
    "Recomendation": {
        id: "Recomendation",
        translate: "Рекомендації",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "text",
                translate: "Назва"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "categoryID",
                translate: "Спеціальність"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/RecomendationForm'),
        axios: allAxioses.recomendationsAxios,
        limitPerPage: 50
    },
    "Video": {
        id: "Video",
        translate: "Відео",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "title",
                translate: "Назва"
            },
            {
                name: "categoryID",
                translate: "Спеціальність"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
            {
                name: "src",
                translate: "Джерело"
            },
            {
                name: "embedURL",
                translate: "Код для вставлення"
            },
            {
                name: "previewImgSrc",
                translate: "Малюнок"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/VideoForm'),
        axios: allAxioses.videoAxios,
        limitPerPage: 50
    },
    "Foto": {
        id: "Foto",
        translate: "Малюнки/фото",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "name",
                translate: "Назва файлу"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/FotoForm'),
        axios: allAxioses.imgAxios,
        limitPerPage: 100
    },
    "File": {
        id: "File",
        translate: "Файли",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "name",
                translate: "Назва"
            },
            {
                name: "link",
                translate: "Джерело"
            },
            {
                name: "createdAt",
                translate: "Дата створення"
            },
            {
                name: "updatedAt",
                translate: "Дата оновлення"
            }
        ],
        component: require('../../../components/Admin/forms/FileForm'),
        axios: allAxioses.fileAxios,
        limitPerPage: 100
    },
    "OrderHomePage": {
        id: "OrderHomePage",
        translate: "Порядок блоків Index",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "componentName",
                translate: "Назва блоку"
            },
            {
                name: "additionalDataJSON",
                translate: "Технічна інформація (JSON)"
            },
            {
                name: "orderNumber",
                translate: "Порядковий номер"
            },
            {
                name: "isOnline",
                translate: "Онлайн"
            },
        ],
        component: require('../../../components/Admin/forms/OrderHomePageForm'),
        axios: allAxioses.orderAxios,
        limitPerPage: 50
    },
    "AdvertisingPlace": {
        id: "AdvertisingPlace",
        translate: "Місця під рекламу",
        columns: [
            {
                name: "id",
                translate: "ID"
            },
            {
                name: "type",
                translate: "Частина сайту"
            },
            {
                name: "jsonConfig",
                translate: "Технічна інформація (JSON)"
            }
        ],
        component: require('../../../components/Admin/forms/AdvertisingPlaceForm'),
        axios: allAxioses.advertisingPlaceAxios,
        limitPerPage: 50
    }
};

function AdminPageFormik(props) {
    const [topAdminData, setTopAdminData] = useState({
        isTable: true,
        tableName: '',
        dataID: ''
    });

    const Component = useMemo(() => {
        if (!topAdminData.tableName) {
            return <></>;
        }

        if (topAdminData.isTable) {
            return <TableData
                tableName={tablesOptions[topAdminData.tableName].id}
                tableTranslate={tablesOptions[topAdminData.tableName].translate}
                axios={tablesOptions[topAdminData.tableName].axios}
                limitPerPage={tablesOptions[topAdminData.tableName].limitPerPage}
                columns={tablesOptions[topAdminData.tableName].columns}
                setTopAdminData={setTopAdminData}
                searchFilterDefault={tablesOptions[topAdminData.tableName].searchFilterDefault}
            />
        } else {
            const FormComponent = tablesOptions[topAdminData.tableName].component.default;

            return <FormComponent
                ID={topAdminData.dataID}
                tableName={topAdminData.tableName}
                userRule={props.userRule}
                translate={tablesOptions[topAdminData.tableName].translate}
                previewLink={tablesOptions[topAdminData.tableName].previewLink}
            />
        }
    }, [topAdminData, setTopAdminData, props.userRule]);

    return <TableHeaderSection tablesObj={tablesOptions} setTopAdminData={setTopAdminData} topAdminData={topAdminData} signOut={props.signOut}>
        {Component}
    </TableHeaderSection>
}

export default AdminPageFormik;
