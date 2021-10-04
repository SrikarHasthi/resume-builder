import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router";
import {setUserData} from "../redux/actions/userData"
import "./css/PersonalData.css";
import Preview from "./Preview";
let PersonalData = () => {
  let details = useSelector((state) => state.data);
   let isuser = useSelector((state) => state.user);
    console.log(details);
    let { fname, lname, email, phone, city, state } =details;
  let dispatch=useDispatch();
  let history=useHistory();
  return (
    <>
      {isuser ? "" : <Redirect to="/login" />}
      <div className="template-container">
        <div className="data-container">
          <div className="row m-3">
            <h4>PERSONAL DATA</h4>
            <div className="col-5 m-2">
              <input
                value={fname}
                onChange={(e) => {
                  dispatch(setUserData({ fname: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ lname: e.currentTarget.value }));
                }}
                type="text"
                value={lname}
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ email: e.currentTarget.value }));
                }}
                type="text"
                value={email}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ phone: e.currentTarget.value }));
                }}
                type="number"
                value={phone}
                className="form-control"
                placeholder="Phone No."
              />
            </div>
            <div className="col-5 m-2 ">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ state: e.currentTarget.value }));
                }}
                type="text"
                value={state}
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ city: e.currentTarget.value }));
                }}
                type="text"
                value={city}
                className="form-control"
                placeholder="City"
              />
            </div>
            <button
              onClick={() => {
                history.push("/experience");
              }}
              className="btn-primary col-2 m-4"
            >
              Next
            </button>
          </div>
        </div>
        <Preview />
      </div>
    </>
  );
};
export default PersonalData;
