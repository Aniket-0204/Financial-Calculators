import { BrowserRouter, Routes, Route, Navigate  } from 'react-router'

import './App.css'
import Navbar from './components/navbar'
import SIPcalculator from './pages/SIPcalculator'
import SWPcalculator from './pages/SWPcalculator'

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<SIPcalculator/>} ></Route>
            <Route path="/SWP" element={<SWPcalculator/>} ></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes> 
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
