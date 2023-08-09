import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


/*
in strict mode react  renders each component
 twice and tackes second render to account and 
 the first render is to detect the  potential 
  issue with code
*/