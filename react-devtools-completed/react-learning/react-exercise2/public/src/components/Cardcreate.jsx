import react from "react"
function Cardcreate(props){
    return(
        <div className="card">
            <img src={props.img} alt=""/>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <p>{props.rate}</p>
        </div>
    )};

    export default Cardcreate;