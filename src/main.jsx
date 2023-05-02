import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { LoginCTXProvider } from './Context/LoginCTX.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginCTXProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </LoginCTXProvider>
)
