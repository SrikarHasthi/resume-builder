import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCCXb9RtWZmYSOeoXCTSbz2sjSAK8m088U",
  authDomain: "resume-builder-f42bb.firebaseapp.com",
  projectId: "resume-builder-f42bb",
  storageBucket: "resume-builder-f42bb.appspot.com",
  messagingSenderId: "74303234089",
  appId: "1:74303234089:web:1c59b28b68f3fb2baf3c38",
};

firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();
export const auth=firebase.auth();