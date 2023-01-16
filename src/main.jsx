import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProviderWrapper } from './context/auth.context'


import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <BrowserRouter >
   <AuthProviderWrapper>
    <App />
    </AuthProviderWrapper>
  </BrowserRouter>
  
  </React.StrictMode>,
)
