import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import NavbarDashboard from './components/NavbarDashboard'
import Dashboard from './pages/Dashboard'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}

export default App
