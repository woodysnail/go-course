
import App from './App.jsx'
import {Routes, Route, BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <App />
    </Routes>
    </BrowserRouter>
   

  </StrictMode>,
)
