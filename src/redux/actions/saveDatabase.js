import { firestore } from "../../firebase";
export const saveResume = () => {
  return {
    type: "SET_RESUME",
  };
};

export const saveErr = (err) => {
  return {
    type: "SET_ERR",
    payload: err,
  };
};
export const saveId = (id) => {
  return {
    type: "SET_ID",
    payload: id,
  };
};

export const saveResumeSpecialAction = (uid, details, code) => {
  return (dispatch) => {
    dispatch(saveResume());
    firestore
      .collection("resume")
      .add({
        uid,
        details,
        code,
      })
      .then((docRef) => {
        return docRef.get();
      })
      .then((doc) => {
        dispatch(saveId(doc.id));
      })
      .catch((err) => {
        dispatch(saveErr(err));
      });
  };
};
