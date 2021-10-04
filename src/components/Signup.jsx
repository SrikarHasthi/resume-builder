import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";

let Signup = () => {
  let history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
   let state = useSelector(state=>state.user)
  return (
    <>
    {state?<Redirect to="/"/>:""}
      <div className="row">
        <form className="col-3 offset-4 mt-5">
          <h1>Signup!</h1>
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
            <label htmlFor="exampleInputPassword2" className="form-label">
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (password === confirmPassword) {
                auth.createUserWithEmailAndPassword(email, password);
              }
            }}
            className="btn btn-primary"
          >
            Signup
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
