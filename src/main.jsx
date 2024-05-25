import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "./bootstrap.min.css"
import { Provider } from 'react-redux'
import ffStore from './redux/ffStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={ffStore}>
  <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
  </React.StrictMode>,
)
