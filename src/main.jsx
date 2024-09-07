import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Pages/Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
