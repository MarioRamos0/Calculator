import { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Operator from '../Operator/Operator'
import './Calculator.css'

export default function App() {
    const [outText, setOutText] = useState(0)
    const [operator, setOperator] = useState('')
    const [value, setValue] = useState(0)

    const save = () => {
        setValue(value + outText)
    }

    const operate = () => {
        let newValue
        if (operator === '+') newValue = value + outText
        if (operator === '-') newValue = value - outText
        if (operator === 'x') newValue = value * outText
        if (operator === '/')
            newValue = value % outText ? (value / outText).toFixed(5) : value / outText
        setOutText(newValue)
    }

    const clearDisplay = () => {
        setOutText(0)
    }

    const decisionForOperations = (operation) => {
        const isSpecialCondition = operation === '=' || operation === 'AC'
        if (operation === '=') operate()
        if (operation !== '=') clearDisplay()
        if (!isSpecialCondition) save()
        setOperator(isSpecialCondition ? '' : operation) // If the operator equals to "AC" or "=",  operation will be clear
        if (isSpecialCondition) setValue(0)
    }

    const chooser = (i) => {
        if (typeof i !== 'number') return decisionForOperations(i)
        if (outText !== 0) return setOutText(outText * 10 + i)
        return setOutText(i)
    }

    return (
        <div className="box">
            <div className="screen">{outText}</div>
            <div className="buttonspace">
                <Buttons onClickHandler={(i) => chooser(i)} />
                <Operator onClickHandler={(i) => chooser(i)} />
            </div>
        </div>
    )
}
