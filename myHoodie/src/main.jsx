import React from 'react'
import ReactDOM from 'react-dom/client'
// IMPORTO BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
// IMPORTO BOOSTRAP ICONS
// import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
//importo Firebase
import {initializeApp} from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD9EBPg2xUOPVlhKM4B6Dd5aaoetOU88QY",
  authDomain: "myhoodie-dd2de.firebaseapp.com",
  projectId: "myhoodie-dd2de",
  storageBucket: "myhoodie-dd2de.appspot.com",
  messagingSenderId: "614458342101",
  appId: "1:614458342101:web:a7d320a01393cc207c805c"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
