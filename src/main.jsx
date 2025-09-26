import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Me from './Me.jsx'
import Greeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Me />
    
  </StrictMode>,
)
