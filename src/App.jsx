// import { useState } from 'react'
import './App.css'
import {BrowserRouter,Navigate,Routes,Route,Link} from "react-router-dom"
import {Login} from "./Routes/Login.jsx"
import {Dashboard} from "./Routes/Dashboard.jsx"
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Users } from './Routes/Users.jsx';
import { User } from './Routes/User.jsx';
import { AddUser } from './Routes/AddUser.jsx';
import { ModifyUser } from './Routes/ModifyUser.jsx';
import { useSessionContext } from "./context/SessionProvider"

function App() {
  const userData = useSessionContext();
  return (
    <>
      {/* adding de BrowserRouter component to involve all the routes */}
      <BrowserRouter>
        {/* includ the  Routes router to manage like a switch between the routes*/}
        <Header></Header>
        <Routes>
          
        
          <Route path='/login' element={userData.userLogin ?<Dashboard/> : <Login/>} />
          <Route path='/'  element={userData.userLogin ?<Dashboard/> : <Login/>} />

          <Route path='/users/:id' element={userData.userLogin ? <User/> : <Login/> } /> 
          <Route path='/users' element={userData.administrator ? <Users/> :userData.userLogin ?<Dashboard/> : <Login/>  }/>
          <Route path='/users/add' element={userData.administrator ? <AddUser/> :userData.userLogin ?<Dashboard/> : <Login/> }/>
          <Route path='/users/modify/:id' element={userData.administrator ? <ModifyUser/> :userData.userLogin ?<Dashboard/> : <Login/> }/>
          <Route path='*' element={<Login/>} />



        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
