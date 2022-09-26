import React from 'react'

const englishABC = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

const cyrylicABC = [
    'А',
    'Б',
    'В',
    'Г',
    'Ґ',
    'Д',
    'Е',
    'Є',
    'Ж',
    'З',
    'И',
    'І',
    'Ї',
    'Й',
    'К',
    'Л',
    'М',
    'Н',
    'О',
    'П',
    'Р',
    'С',
    'Т',
    'У',
    'Ф',
    'Х',
    'Ц',
    'Ч',
    'Ш',
    'Щ',
    'Ь',
    'Ю',
    'Я',
    'Ё',
    'Ъ',
    'Ы',
    'Ь',
    'Э'
]

function Alphabets(props) {
    const ukrainianAlphabet = getAlphabet(cyrylicABC, props.setLetter);
    const englishAlphabet = getAlphabet(englishABC, props.setLetter);

    return <div className="AlpabetBlock">
        {ukrainianAlphabet}
        {englishAlphabet}
    </div>
}

export default Alphabets;

function getAlphabet(abc, setLetter) {
    return <ul>
        {abc.map(letter => {
            return <li key={letter}>
                <a href="#" onClick={() => setLetter(letter)}>
                    {letter}
                </a>
            </li>
        })}
    </ul>
}
