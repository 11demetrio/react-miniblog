// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDDuK_NbSyOC6n9-dV-uXlNxnHxXLiUN-0",
  authDomain: "blogandre-e8f14.firebaseapp.com",
  projectId: "blogandre-e8f14",
  storageBucket: "blogandre-e8f14.appspot.com",
  messagingSenderId: "228801341291",
  appId: "1:228801341291:web:ab4db21ad136e259de0e2e",
  measurementId: "G-29Y69JSL3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore (app)
export {db};
