import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import LoginPages from './pages/LoginPages'
import InicioAdminPage from './pages/InicioAdminPage'
import { useState } from 'react'
import GestionAdminPage from './pages/GestionAdminPage'
import Header from './components/NavBar/Header'
import ProtectRoute from './components/ProtectRoute'


function App() {

  const [users, setusers] = useState([])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPages users={users} setusers={setusers}/>} />

                            {/*Rutas Protegidas*/}
      <Route element={<ProtectRoute users={users}/>}> 
      <Route path='/inicioAdmin' element={<InicioAdminPage users={users} setusers={setusers} redirectTo="/login"/>}/>
      <Route path='/gestionAdmin' element={<GestionAdminPage users={users} setusers={setusers}/>}/>
      </Route>
                            {/*Rutas Protegidas*/}  

    </Routes>

    </BrowserRouter>
  
  )
}

export default App
