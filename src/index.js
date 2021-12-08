import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


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
// const analytics = getAnalytics(app);





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
