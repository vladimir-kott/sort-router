import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
/*import Users from './components/users'*/
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import App from './App'

/*ReactDOM.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>,
  document.getElementById('root')
)*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();
