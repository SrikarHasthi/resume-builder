import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router";
import { setUserData } from "../redux/actions/userData";
import { saveResumeSpecialAction } from "../redux/actions/saveDatabase";
import "./css/PersonalData.css";
import Preview from "./Preview";
let Qualifications = () => {
  let details = useSelector((state) => state.data);
  console.log(details);
  let { degree, cgpa, college, year, isChecked,interCollege,interCgpa,interYear,tenthCollege,tenthCgpa,tenthYear } = details;
  let isuser = useSelector((state) => state.user);
  let user = useSelector((state) => state.user);
  let uid = "";
  if (user) {
    uid = user.uid;
  }
  let code = useSelector((state) => state.template);
  let dispatch = useDispatch();
  let { id } = useSelector((state) => state.details);
  let history = useHistory();
  return (
    <>
      {isuser ? "" : <Redirect to="/login" />}
      <div className="template-container">
        <div className="data-container">
          <div className="row m-3">
            <h4>UNDERGRADUATE</h4>
            <div className="col-5 m-2">
              <input
                value={degree}
                onChange={(e) => {
                  dispatch(setUserData({ degree: e.currentTarget.value }));
                }}
                type="text"
                className="form-control"
                placeholder="Degree"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ college: e.currentTarget.value }));
                }}
                type="text"
                value={college}
                className="form-control"
                placeholder="College"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ cgpa: e.currentTarget.value }));
                }}
                type="number"
                value={cgpa}
                className="form-control"
                placeholder="CGPA"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ year: e.currentTarget.value }));
                }}
                type="number"
                value={year}
                className="form-control"
                placeholder="YEAR"
              />
            </div>
          </div>
          <div className="row m-3">
            <h4>12TH</h4>
            <div className="col-5 m-2">
              <input
                value={interCollege}
                onChange={(e) => {
                  dispatch(
                    setUserData({ interCollege: e.currentTarget.value })
                  );
                }}
                type="text"
                className="form-control"
                placeholder="College"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ interCgpa: e.currentTarget.value }));
                }}
                type="number"
                value={interCgpa}
                className="form-control"
                placeholder="CGPA or %"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ interYear: e.currentTarget.value }));
                }}
                type="number"
                value={interYear}
                className="form-control"
                placeholder="YEAR"
              />
            </div>
          </div>
          <div className="row m-3">
            <h4>10TH</h4>
            <div className="col-5 m-2">
              <input
                value={tenthCollege}
                onChange={(e) => {
                  dispatch(
                    setUserData({ tenthCollege: e.currentTarget.value })
                  );
                }}
                type="text"
                className="form-control"
                placeholder="School"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ tenthCgpa: e.currentTarget.value }));
                }}
                type="number"
                value={tenthCgpa}
                className="form-control"
                placeholder="CGPA or %"
              />
            </div>
            <div className="col-5 m-2">
              <input
                onChange={(e) => {
                  dispatch(setUserData({ tenthYear: e.currentTarget.value }));
                }}
                type="number"
                value={tenthYear}
                className="form-control"
                placeholder="YEAR"
              />
            </div>
          </div>
          <div className="form-check m-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              isChecked={isChecked}
              id="flexCheckDefault"
              onClick={(e) => {
                dispatch(setUserData({ isChecked: e.currentTarget.checked }));
                console.log(e.currentTarget.checked);
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Make Public
            </label>
          </div>
          <button
            onClick={() => {
              history.push("/experience");
            }}
            className="btn-primary m-4"
          >
            Back
          </button>
          <button
            onClick={() => {
              alert(`http://localhost:3000/finalpreview/${id}`);
            }}
            className="btn btn-primary btn-generate"
          >
            Generate Link
          </button>
          <button
            onClick={() => {
              dispatch(saveResumeSpecialAction(uid, details, code));
              alert("Data Saved to Database");
            }}
            className="btn btn-primary btn-database"
          >
            Save to Database
          </button>
          
        </div>

        <Preview />
      </div>
    </>
  );
};
export default Qualifications;
