import {useState } from "react";

function Login() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwds2] = useState("");
  const [same,setSame]=useState(true);

  function Handlepwd1(event){
    setPwd1(event.target.value);
    console.log(event.target.value);
  }

  function Handlepwd2(event){
    setPwds2(event.target.value);
    if(pwd1 == event.target.value){
      console.log("successfullyyyy")
      setSame(true);
    }
    else{
      console.log("give correct password")
      setSame(false);
    }
  }

  return (
    <form style={{ width: "50%", margin: "auto", marginTop: "10%" }}>
      <div className="mb-3">
        <label className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Password
        </label>
        <input
          value={pwd1}
          onChange={Handlepwd1}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          RE-enter Password
        </label>
        <input
          value={pwd2}
          onChange={Handlepwd2}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-check-label">
          Accept
        </label>
      </div>
      {!same && <p>password is Notsame</p>}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Login;
