import React from 'react'

function Journal(props) {
    return <div className="journalContainer" key={props.name}>
        <h3>{props.name}</h3>
        <p>{props.fullname}</p>
        <img src={props.img} alt="#"/>
        <p className="special"><span>Спеціалізація:</span> {props.special} </p>
        <p className="special"><span>Головний редактор: </span>{props.mainEditor}</p>
        <p>{props.shefEditor}</p>
        <h4>ОФІЦІЙНА ІНФОРМАЦІЯ</h4>
        <p className="special2"><span>Рік заснування:</span> {props.yearFoundation}</p>
        <p className="special2"><span>ISSN:</span> {props.ISSN}</p>
        <p className="special2"><span>Фахова реєстрація у МОН України:</span> {props.registrationMON}</p>
        <p className="special2"><span>Мова видання:</span> {props.languages}</p>
        <p className="special2"><span>Періодичність виходу:</span> {props.periodicity}</p>
        <p className="special2"><span>Тираж:</span> {props.circulation}</p>
        <p className="special2"><span>Формат:</span> {props.format}</p>
    </div>
}

export default Journal;