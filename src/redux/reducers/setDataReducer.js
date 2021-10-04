let initialstate = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  degree: "",
  college: "",
  cgpa: "",
  year: "",
  interCollege:"",
  interCgpa:"",
  interYear:"",
  tenthCollege:"",
  tenthCgpa:"",
  tenthYear:"",
  company: "",
  position: "",
  description: "",
  skills:[],
  isChecked: null,
};
let setDataReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default setDataReducer;
