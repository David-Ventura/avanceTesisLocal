import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//styleHeader
import './assets/css/StyleHeader.css'

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import 'datatables.net-dt/css/dataTables.dataTables.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
        <App />
      </BrowserRouter>

  </React.StrictMode>,
)
