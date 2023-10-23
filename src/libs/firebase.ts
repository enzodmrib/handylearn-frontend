import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCcXP2SWJFz_j7nAJy0zobked4TvGxVvE8",
  authDomain: "handylearn-414e8.firebaseapp.com",
  projectId: "handylearn-414e8",
  storageBucket: "handylearn-414e8.appspot.com",
  messagingSenderId: "352529869863",
  appId: "1:352529869863:web:49f13d97c3a68528fbb202",
  measurementId: "G-LFPCS2DCF3" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
