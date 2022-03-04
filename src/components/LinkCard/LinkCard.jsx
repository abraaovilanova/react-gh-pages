import './LinkCard.css'

export default ({mainText, Icon, handleClick}) => {
    return(
        <div className="linkcard" onClick={()=>handleClick(true)}>
            <div className="linkcard__icon">
                <Icon />
            </div>
            <div className="linkcard__text">
                {mainText}
            </div>
        </div>
    )
}