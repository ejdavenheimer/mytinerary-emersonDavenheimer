import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './pages/City'
import store from './redux/store'
import { Provider } from 'react-redux'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/cities/:name' element={<City />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login></Login>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
