import Button from '../Button/Button'
import './Operator.css'

const Operator = ({ onClickHandler }) => {
    const buttons = []

    buttons.push(<Button text="+" onClick={() => onClickHandler('+')} key="/" index="div" />)
    buttons.push(<Button text="x" onClick={() => onClickHandler('x')} key="x" index="x" />)
    buttons.push(<Button text="-" onClick={() => onClickHandler('-')} key="-" index="rest" />)
    buttons.push(<Button text="/" onClick={() => onClickHandler('/')} key="+" index="sum" />)

    return <div className="operators">{buttons}</div>
}

export default Operator
