import react, { useState } from "react";


function Cardcreate(props) {
  const [purchased, setpurchased] = useState(false);
  const [discount,setdiscount]=useState(props.price);

  function Addlist(discount) {
       setpurchased(true);
       console.log(props.name,"prachased",discount, "%discount")
  }

  function Applydisc(amt) {
    setdiscount(discount-amt)
  }
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <h3>{discount}</h3>
      <p>{props.rate}</p>
      <button onClick={()=>Applydisc(30)}>discount</button>
      <button onClick={() =>Addlist(30)}>Add</button>
      <button onClick={() => props.delete(props.id)}>Delete</button>
      <p>{purchased ? "Already prachased" : "got it now"}</p>
    </div>
  );
}

export default Cardcreate;
