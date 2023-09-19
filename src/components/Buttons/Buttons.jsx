import Button from '../Button/Button'
import './Buttons.css'
export default function Buttons({ onClickHandler }) {
    const buttons = []

    for (let i = 9; i > 0; i--) {
        buttons.push(<Button text={i} onClick={() => onClickHandler(i)} key={i} />)
    }

    buttons.push(<Button text="=" onClick={() => onClickHandler('=')} key="=" index="equal" />)
    buttons.push(<Button text={0} onClick={() => onClickHandler(0)} key={0} />)
    buttons.push(<Button text="AC" onClick={() => onClickHandler('AC')} key="C" index="C" />)

    return <div className="numbers">{buttons}</div>
}
