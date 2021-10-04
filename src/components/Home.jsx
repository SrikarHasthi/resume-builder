import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
import "./css/Home.css";
import {setTemplate} from "../redux/actions/templateAction"

let Home = () => {
  let dispatch=useDispatch();
  let history=useHistory();
  let isuser = useSelector((state) => state.user);
  return (
    <>
      {isuser ? "" : <Redirect to="/login" />}
      <div className="template-container">
        <div
          onClick={() => {
            dispatch(setTemplate("A"));
            history.push("/personal")
          }}
          className="resume-container"
        >
          <img src="http://localhost:3000/skin1.svg" alt="" />
        </div>
        <div
          onClick={() => {
            dispatch(setTemplate("B"));
             history.push("/personal");
          }}
          className="resume-container"
        >
          <img src="http://localhost:3000/skin2.svg" alt="" />
        </div>
      </div>
      <button
        onClick={() => {
          auth.signOut();
        }}
        className="btn-primary logout-btn"
      >
        Logout
      </button>
    </>
  );
};

export default Home;
