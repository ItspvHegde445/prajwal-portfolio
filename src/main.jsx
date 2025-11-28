import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './App.jsx' // Assuming your main component is now named Portfolio
import './index.css' // <<< THIS LINE IS CRITICAL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)