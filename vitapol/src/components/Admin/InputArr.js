import React, {useState, useEffect} from 'react'

function InputArr({subType, placeholder, references, value}) {
    const [stateArr, setStateArr] = useState(value);


    switch(subType) {
        case 'referenceArr':
            return <label>
                {placeholder}
                {stateArr && stateArr.map(v => {
                    return <select name={idName}>
                        <option value={''}>Default</option>
                        {references.map(ref => {
                            return <option value={ref.id} selected={v === ref.id}>{ref[valueName]}</option>
                        })}
                    </select>
                })}
            </label>
    case 'array': 
        return <label>
            {placeholder}
            {stateArr && stateArr.map(v => {
                return <input
                    type="text"
                    name={idName}
                    placeholder={placeholder}
                    disabled={isIgnore}
                    value={v}
                    onChange={(e) => {setValue(e.target.value)}}
                />
            })}
        </label>
    }
}

export default InputArr;