import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModeContextProvider } from './context/mode/Mode.jsx'
import { IdiomaContextProvider } from './context/idioma/Idioma-Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeContextProvider>
        <IdiomaContextProvider>
          <App />
        </IdiomaContextProvider>
    </ModeContextProvider>
  </React.StrictMode>,
)
