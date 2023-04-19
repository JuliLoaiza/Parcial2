import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextPadre } from './context/contextPadre'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextPadre />
  </React.StrictMode>,
)
