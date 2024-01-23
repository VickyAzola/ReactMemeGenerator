import React from "react"
import ReactDOM from 'react-dom/client'
import TheHeader from './components/TheHeader.jsx'
import TheForm from './components/TheForm.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='card'>
      <TheHeader />
      <TheForm />
    </div>
  </React.StrictMode>,
)
