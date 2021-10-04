import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";

let Login = () => {
  let history = useHistory();
  let state=useSelector(state=>state.user);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <>
      {state ? <Redirect to="/" /> : ""}
      <div className="row">
        <form className="col-3 offset-4 mt-5">
          <h1>Login</h1>
          <div className="mb-3 mt-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button onClick={(e)=>{
            e.preventDefault();
            auth.signInWithEmailAndPassword(email,password);
        
          }} className="btn btn-primary">Login</button>
          <br />
          <br />
          <button
            onClick={() => {
              history.push("/signup");
            }}
            className="btn btn-primary"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
