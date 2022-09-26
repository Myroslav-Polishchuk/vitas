import React from 'react';

// const aboutListClients = [
//     {
//         name: "Abbott",
//         img: "/img/about/clients/abbot.gif"
//     },
//     {
//         name: "Acino",
//         img: "/img/about/clients/acino.jpg"
//     },
//     {
//         name: "Arterium",
//         img: "/img/about/clients/arterium.gif"
//     },
//     {
//         name: "Astellas",
//         img: "/img/about/clients/astellas.gif"
//     },
//     {
//         name: "AstraZeneca",
//         img: "/img/about/clients/astrazeneca.gif"
//     },
//     {
//         name: "Бізнес Центр Фармація",
//         img: "/img/about/clients/bcfarmazia.jpg"
//     },
//     {
//         name: "Bayer",
//         img: "/img/about/clients/bayer.gif"
//     },
//     {
//         name: "Berlin-Chemie Menarini",
//         img: "/img/about/clients/berlinhemie.gif"
//     },
//     {
//         name: "ЗАТ НВЦ «Борщагівський хіміко-фармацевтичний завод»",
//         img: "/img/about/clients/borshagivskyZavod.gif"
//     },
//     {
//         name: "Boehringer Ingelheim",
//         img: "/img/about/clients/boehringer.gif"
//     },
//     {
//         name: "Danone",
//         img: "/img/about/clients/danone.gif"
//     },
//     {
//         name: "Delta Medical",
//         img: "/img/about/clients/deltamedical.gif"
//     },
//     {
//         name: "Euromedex",
//         img: "/img/about/clients/euromedex.gif"
//     },
//     {
//         name: "GlaxoSmithKline",
//         img: "/img/about/clients/glaxosmithkline.gif"
//     },
//     {
//         name: "Alpen Pharma AG",
//         img: "/img/about/clients/alpen.jpg"
//     },
//     {
//         name: "Jadran",
//         img: "/img/about/clients/jadran.gif"
//     },
//     {
//         name: "Biocodex",
//         img: "/img/about/clients/biocodex.jpg"
//     },
//     {
//         name: "Jelfa",
//         img: "/img/about/clients/jelfa.gif"
//     },
//     {
//         name: "KRKA",
//         img: "/img/about/clients/krka.gif"
//     },
//     {
//         name: "Kusum",
//         img: "/img/about/clients/kusum.gif"
//     },
//     {
//         name: "Hemofarm",
//         img: "/img/about/clients/hemofarm.gif"
//     },
//     {
//         name: "Angelini",
//         img: "/img/about/clients/angelini.gif"
//     },
//     {
//         name: "Дарниця",
//         img: "/img/about/clients/darnytsa.jpg"
//     },
//     {
//         name: "Dr. Reddy's",
//         img: "/img/about/clients/drreddys.gif"
//     },
//     {
//         name: "Macleods",
//         img: "/img/about/clients/macleods.gif"
//     },
//     {
//         name: "Meda Pharmaceuticals",
//         img: "/img/about/clients/meda.gif"
//     },
//     {
//         name: "Medtronic",
//         img: "/img/about/clients/medtronic.gif"
//     },
//     {
//         name: "Мегаком",
//         img: "/img/about/clients/megakom.gif"
//     },
//     {
//         name: "Nobel Pharma",
//         img: "/img/about/clients/nobel.gif"
//     },
//     {
//         name: "Novartis",
//         img: "/img/about/clients/novartis.gif"
//     },
//     {
//         name: "Egis Pharmaceuticals PLC",
//         img: "/img/about/clients/egis.jpg"
//     },
//     {
//         name: "Johnson & Johnson",
//         img: "/img/about/clients/johnsonAndJohnson.gif"
//     },
//     {
//         name: "Orion Pharma",
//         img: "/img/about/clients/orionpharma.gif"
//     },
//     {
//         name: "Фармак",
//         img: "/img/about/clients/farmak.gif"
//     },
//     {
//         name: "Polpharma",
//         img: "/img/about/clients/polpharma.gif"
//     },
//     {
//         name: "Pro.Med.CS Praha a.s.",
//         img: "/img/about/clients/promed.gif"
//     },
//     {
//         name: "Pro-Pharma",
//         img: "/img/about/clients/propharma.gif"
//     },
//     {
//         name: "World Medicine",
//         img: "/img/about/clients/worldmedicine.jpg"
//     },
//     {
//         name: "Richter Gedeon",
//         img: "/img/about/clients/richtergedeon.gif"
//     },
//     {
//         name: "Roche",
//         img: "/img/about/clients/roche.gif"
//     },
//     {
//         name: "Sanofi",
//         img: "/img/about/clients/sanofi.gif"
//     },
//     {
//         name: "Servier",
//         img: "/img/about/clients/servier.gif"
//     },
//     {
//         name: "Сона-фарм",
//         img: "/img/about/clients/sonapharm.gif"
//     },
//     {
//         name: "Takeda Nycomed",
//         img: "/img/about/clients/takedanykomed.gif"
//     },
//     {
//         name: "Teva",
//         img: "/img/about/clients/teva.gif"
//     },
//     {
//         name: "Юрія-Фарм",
//         img: "/img/about/clients/yuriafarm.gif"
//     },
//     {
//         name: "Woerwag Pharma",
//         img: "/img/about/clients/worwag.jpg"
//     },
//     {
//         name: "Sandoz",
//         img: "/img/about/clients/sandoz.jpg"
//     },
//     {
//         name: "STADA",
//         img: "/img/about/clients/stada.jpg"
//     },
//     {
//         name: "Organosyn",
//         img: "/img/about/clients/organosyn.jpg"
//     },
//     {
//         name: "Ipsen",
//         img: "/img/about/clients/ipsen.jpg"
//     },
//     {
//         name: "Novo Nordisk",
//         img: "/img/about/clients/novonordisk.jpg"
//     },
//     {
//         name: "АТ Київський вітамінний завод",
//         img: "/img/about/clients/kvz.jpg"
//     },
//     {
//         name: "ZDRAVO",
//         img: "/img/about/clients/zdravo.jpg"
//     }
// ]

function AboutMain() {
    const outActivity = <>
        <p>Наша діяльність розпочалася у 1995 році, і сьогодні <span>Видавничо-інформаційна група «ВІТ-А-ПОЛ»</span> — це:</p>
        <ul>
            <li>спеціалізований вебсайт для фахівців галузі охорони здоров’я http://vitapol.info;</li>
            <li>вісім загальнонаціональних науково-практичних спеціалізованих медичних журналів та вебсайтів;</li>
            <li>комунікаційні проекти (конференції, презентації, PR);</li>
            <li>різноманітна видавнича продукція (книги, брошури, календарі, листівки, буклети, репринти);</li>
            <li>адресна доставка видань, поліграфічної та електронної продукції;</li>
            <li>оригінальні дизайнерські розробки;</li>
            <li>переклади з англійської та інших мов.</li>
        </ul>
        <p>
            Силами творчого колективу Видавничо-інформаційної групи «ВІТ-А-ПОЛ» створюються і виходять у світ періодичні видання, наукові монографії, книги, проводяться науково-практичні конференції, презентації, прес-конференції на актуальні теми з наукового і громадського життя української медичної спільноти.
        </p>
        <p>
            Ми об'єднали висококваліфікованих спеціалістів у сфері охорони здоров’я, журналістики, видавничої справи, реклами, дизайну та програмування. Саме ця команда зробила нас однією з провідних компаній у галузі науково-медичної інформації.
        </p>
        <p>
            Усі журнали Видавничо-інформаційної групи «ВІТ-А-ПОЛ» атестовані Міністерством освіти і науки України як фахові з медичних наук.
        </p>
        <p>
            На сьогодні клієнтами Видавничо-інформаційної групи «ВІТ-А-ПОЛ» є численні вітчизняні та іноземні компанії, державні та приватні заклади охорони здоров’я, наукові інституції, професійні громадські об’єднання лікарів. Ми надаємо високоякісні послуги, тому більшість клієнтів працюють з нами на постійній основі. Компетентність, актуальність, професіоналізм Видавничо-інформаційної групи «ВІТ-А-ПОЛ» – це гарантія успішного співробітництва і досягнення очікуваного результату.
        </p>
    </>

    // const bossCompany = <>
    //     <h3>Керівництво компанією</h3>
    //     <ul className="noListType">
    //         <li><b>Директор</b></li>
    //         <li>Андрій Володимирович Поліщук</li>
    //     </ul>
    //     <ul className="noListType">
    //         <li><b>Фінансовий директор</b></li>
    //         <li>Тая Петрівна Чечель</li>
    //         <li>Тел.: <a href="tel:+380442980063">+38 044 298 00 63</a></li>
    //         <li>E-mail: <a className="listItemGreen" href="mailto:taisa.chechel@gmail.com">taisa.chechel@gmail.com</a></li>
    //     </ul>
    //     <ul className="noListType">
    //         <li><b>Завідувач секретаріату науково-практичних журналів</b></li>
    //         <li>Ольга Миколаївна Берник</li>
    //         <li>Тел.: <a href="tel:+380442980061">+38 044 298 00 61</a></li>
    //         <li>E-mail: <a className="listItemGreen" href="mailto:vitapol3@gmail.com ">vitapol3@gmail.com</a></li>
    //     </ul>
    // </>

    const partnersCompany = <>
        <h3>Партнери компанії</h3>
        <h5>Університети</h5>
        <p>Видавничо-інформаційна група «ВІТ-А-ПОЛ» співпрацює з основними профільними вищими навчальними закладами України у сфері охорони здоров'я вже понад 26 років. Роботи відомих учених, наукова діяльність кафедр та факультетів публікуються на сторінках наших журналів, що сприяє розвитку медичної науки, освіти та самоосвіти фахівців медичної галузі.</p>
        <ul>
            <li>Національний медичний університет імені О. О. Богомольця</li>
            <li>Львівський національний медичний університет імені Данила Галицького</li>
        </ul>
    </>

    const scienceIns = <>
        <h5>Наукові інститути</h5>
        <p>Поширення найновішої наукової інформації у сфері медицини є пріоритетним завданням Національної академії медичних наук України. Видавничо-інформаційна група «ВІТ-А-ПОЛ» виступає партнером інститутів НАМН України та публікує оперативну інформацію про їхні сучасні та перспективні дослідження.</p>
        <ul>
            <li>ДУ «Національний інститут терапії імені Л.Т. Малої Національної академії медичних наук України»</li>
            <li>ДУ «Інститут гастроентерології Національної академії медичних наук України»</li>
            <li>ДУ «Інститут охорони здоров’я дітей та підлітків Національної академії медичних наук України»</li>
        </ul>
    </>

    const fivePart = <>
        <h5>Науково-практичні центри МОЗ України</h5>
        <ul>
            <li>Український науково-практичний центр ендокринної хірургії, трансплантації ендокринних органів і тканин МОЗ України</li>
        </ul>
    </>

    const assosicationDoctors = <>
        <h5>Асоціації лікарів</h5>
        <p>Асоціації лікарів – громадські об'єднання лікарів за спеціальністю. Наша робота з асоціаціями – це створена база лікарів, які отримують необхідну інформацію, що стосується їхньої діяльності, і допомога у проведенні науково-практичних конференцій, конгресів, презентацій.</p>
        <ul>
            <li>Українська асоціація лікарів-дерматовенерологів і косметологів</li>
            <li>Асоціація хірургів-гепатологів України</li>
            <li>Асоціація кардіологів, судинних та серцевих хірургів м. Києва</li>
            <li>ВГО «Українська асоціація ендокринних хірургів»</li>
            <li>Асоціація дитячих ендокринологів України</li>
            <li>Асоціація фтизіатрів, пульмонологів і торакальних хірургів м. Києва</li>
        </ul>
    </>

    // const clientsCompany = <>
    //     <h3>Клієнти компанії</h3>
    //     <p>На сьогодні клієнтами Видавничо-інформаційної групи «ВІТ-А-ПОЛ» є понад 50 вітчизняних та іноземних компаній. Ми надаємо високоякісні послуги, тому більшість клієнтів працюють з нами на постійній основі. Компетентність, актуальність, професіоналізм Видавничо-інформаційної групи «ВІТ-А-ПОЛ» – це гарантія успішного співробітництва і досягнення компаніями очікуваного результату.</p>
    //     <ul className="aboutListImg">
    //         {aboutListClients.map((data) => {
    //             if (!data.img) {
    //                 return <></>;
    //             }

    //             return <li key={data.name}>
    //                 <img src={data.img} alt="#"/>
    //                 <span>{data.name}</span>
    //             </li>
    //         })}
    //     </ul>
    // </>

    return <div className="aboutMain">
        {outActivity}
        {/* {bossCompany} */}
        {partnersCompany}
        {scienceIns}
        {fivePart}
        {assosicationDoctors}
        {/* {clientsCompany} */}
    </div>
}

export default AboutMain;