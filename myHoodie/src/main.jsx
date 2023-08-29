import React from 'react'
import ReactDOM from 'react-dom/client'
// IMPORTO BOOSTRAP
import "bootstrap/dist/css/bootstrap.min.css"
// IMPORTO BOOSTRAP ICONS
// import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
