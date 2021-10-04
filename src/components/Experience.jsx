import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory,Redirect } from "react-router";
import { setUserData } from "../redux/actions/userData";
import "./css/PersonalData.css";
import Preview from "./Preview";
let Experience = () => {
  let details = useSelector((state) => state.data);
  let isuser=useSelector((state)=>state.user)
  console.log(details);
  let { company, position, description, skills } = details;
  let dispatch = useDispatch();
  let history = useHistory();
  console.log(skills);
  let inputskill="";
  return (
    <>
      {isuser ? "" : <Redirect to="/login" />}
      <div className="template-container">
        <div className="data-container">
          <div className="row m-3">
            <h4>EXPERIENCE</h4>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ company: e.currentTarget.value }));
                }}
                type="text"
                value={company}
                className="form-control"
                placeholder="Company"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ position: e.currentTarget.value }));
                }}
                type="text"
                value={position}
                className="form-control"
                placeholder="Position"
              />
            </div>
            <div className="col-5 m-2">
              <div className="form-group">
                <textarea
                  onChange={(e) => {
                    dispatch(
                      setUserData({ description: e.currentTarget.value })
                    );
                  }}
                  className="form-control"
                  value={description}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row m-3">
            <h4>SKILLS</h4>
            <div className="col-3 mt-2 ">
              <input
                id="textskill"
                type="text"
                onChange={(e) => {
                    inputskill = e.currentTarget.value;
                }}
                className="form-control"
                placeholder="Skill"
              />
            </div>
            <div className="col-5 m-2">
              <button
                onClick={() => {
                  dispatch(setUserData({ skills: [...skills, inputskill] }));
                    document.getElementById("textskill").value = "";
                }}
                type="button"
                className="btn btn-dark"
              >
                Add
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn-primary col-2 m-4"
          >
            Back
          </button>
          <button
            onClick={() => {
              history.push("/qualifications");
            }}
            className="btn-primary col-2 m-4"
          >
            Next
          </button>
        </div>
        <Preview />
      </div>
    </>
  );
};
export default Experience;
