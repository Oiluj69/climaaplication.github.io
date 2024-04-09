import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWeather } from './componentes/Weather.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWeather />
  </React.StrictMode>,
)
