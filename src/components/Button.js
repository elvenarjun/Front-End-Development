const Button = ({color,text,onClick}) => {

    return (
        <button onClick={onClick} className='btn' style={{backgroundColor:color,color:'white'}}>{text}</button>
    )
}

export default Button
