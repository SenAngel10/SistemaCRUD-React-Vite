import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Producto nombre="Doritos" precio={17} categoria="Frituras" /> */}
    <App>

    </App>
  </StrictMode>,
)
