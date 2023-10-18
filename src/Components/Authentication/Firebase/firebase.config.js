// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl1-HdMBVwlaoaOWLJwztmzagWhnxnc8Q",
  authDomain: "gear-up-f53ff.firebaseapp.com",
  projectId: "gear-up-f53ff",
  storageBucket: "gear-up-f53ff.appspot.com",
  messagingSenderId: "1063649892486",
  appId: "1:1063649892486:web:ba4e09202b780439571907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;