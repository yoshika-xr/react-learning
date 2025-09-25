import { use, useState } from "react";

function Login() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwds2] = useState("");

  function Handlepwd1(event){
    setPwd1(event.target.value);
    console.log(event.target.value);
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
          onChange={Handlepwd1}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Accept
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Login;
