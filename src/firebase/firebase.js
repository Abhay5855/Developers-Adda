// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOtcBXe7y4f6TX6k88JDqUiTEIR8D48zM",
  authDomain: "developers-tinder.firebaseapp.com",
  projectId: "developers-tinder",
  storageBucket: "developers-tinder.appspot.com",
  messagingSenderId: "760126605894",
  appId: "1:760126605894:web:b9acc54133f832d00e9847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;