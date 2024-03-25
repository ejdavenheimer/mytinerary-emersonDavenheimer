import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/cities' element={<Cities />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
