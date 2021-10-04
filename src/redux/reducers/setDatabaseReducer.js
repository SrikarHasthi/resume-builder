let initialState = {
  loading: null,
  error: null,
  id: "",
};
let setDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESUME":
      return { ...state, loading: true };
    case "SET_ERR":
      return { ...state, loading: false, error: action.payload };
    case "SET_ID":
      return { ...state, loading: false, id: action.payload };
    default:
      return state;
  }
};

export default setDataReducer;