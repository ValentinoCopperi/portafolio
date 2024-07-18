import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModeContextProvider } from './context/mode/Mode.jsx'
import { ProyectosContextProvider } from './context/proyectos/Proyectos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeContextProvider>
      <ProyectosContextProvider>
        <App />
      </ProyectosContextProvider>
    </ModeContextProvider>
  </React.StrictMode>,
)
