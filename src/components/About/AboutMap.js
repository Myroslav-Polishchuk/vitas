import React from 'react';

function AboutMap() {
    return <div className="aboutMap">
        <h3>ТОВ «ВІТ-А-ПОЛ»</h3>
        <p>Адреса: вул. Академіка Єфремова, 19-а, оф. 3, м. Київ, 03179</p>
        <p>Тел.: <a href="tel:+380442980060">+38 044 298 00 60</a></p>

        <ul className="emails">
            <li>Електронна пошта: </li>
            <li><a href='mailto:vitapol3@gmail.com'>vitapol3@gmail.com,</a></li>
            <li><a href='mailto:journals@vitapol.com.ua'>journals@vitapol.com.ua</a></li>
        </ul>

        <h3>Завідувач секретаріату науково-практичних журналів</h3>
        <p>Ольга Миколаївна Берник</p>
        <p>Тел.: <a href="tel:+380442980061">+38 044 298 00 61</a></p>
        <p>Електронна пошта: <a className="Green" href='mailto:vitapol3@gmail.com'>vitapol3@gmail.com</a></p>

        <h3>Фінансовий директор</h3>
        <p>Тая Петрівна Чечель</p>
        <p>Тел.: <a href="tel:+380442980063">+38 044 298 00 63</a></p>
        <p>E-mail: <a className="Green" href="mailto:taisa.chechel@gmail.com">taisa.chechel@gmail.com</a></p>

        <h3>Карта</h3>
        <div className="imgContainer">
            <img alt="#" src="/img/about/clients/map2021.jpg"/>
        </div>
    </div>

}

export default AboutMap;