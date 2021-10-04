import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/setUser";
import PersonalData from "./components/PersonalData";
import Qualifications from "./components/Qualifications";
import FinalPreview from "./components/FinalPreview";
import Experience from "./components/Experience";
let App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));
      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();
        if (!doc.exists) {
          docRef.set({
            email,
          });
        }
      }
    });
    return () => {
      unsub();
    };
  },[]);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/finalpreview/:rid">
            <FinalPreview />
          </Route>
          <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/experience">
            <Experience/>
            </Route>
          <Route path="/personal">
            <PersonalData />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
