import './Button.css'

function Button({ text, onClick, index }) {
    return (
        <button className="littleButton" onClick={onClick} id={index}>
            <p> {text} </p>
        </button>
    )
}

export default Button
