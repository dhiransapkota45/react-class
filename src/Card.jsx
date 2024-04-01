import "./Card.css"

const Card = (props) => {
    return(
        <div style={{backgroundColor:"green"}} className="card-container">
            <h1>{props.title}</h1>       
        </div>
    )
}

export default Card