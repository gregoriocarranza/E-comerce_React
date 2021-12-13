import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDBZ3KClK6nIBA40DxJ7IdoteAc1EWykLM",
    authDomain: "e-comerce-react-e2a9d.firebaseapp.com",
    projectId: "e-comerce-react-e2a9d",
    storageBucket: "e-comerce-react-e2a9d.appspot.com",
    messagingSenderId: "959823439742",
    appId: "1:959823439742:web:254be2949d60d23c2e752f",
    measurementId: "G-T2171HS54X"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);




export default db