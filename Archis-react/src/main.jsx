import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( //ben bir tane root oluşturuyorum ve bu rootta render edilen şey app 
  <StrictMode>
    <App /> 
  </StrictMode>,
)

//Ekranda gösterilen sayfa bu 