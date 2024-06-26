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
          {/* defining the routes (just the principals now) */}
          {/* tester variable */}
          
          <Route path='/login' element={<Login/>} />
          <Route path='/'  element={<Dashboard/>} />
          <Route path='/users/:id' element={<User/>}/>

          <Route path='/users' element={<Users/>}/>
          
          <Route path='/users/add' element={<AddUser/>} />
          <Route path='/users/modify/:id' element={<ModifyUser/>} />
          <Route path='/usertypes' element={<Dashboard/>}/>
          <Route path='/usertypes/add'element={<Dashboard/>}/>
          <Route path='/usertypes/modify' element={<Dashboard/>}/>

          {/* for now i think delete doesn't need a page */}
          <Route path='/places' element={<Dashboard/>}/>
          <Route path='/places/add' element={<Dashboard/>}/>
          <Route path='/places/modify' element={<Dashboard/>}/>
          {/* for now i think delete  doesn't need a page */}
          <Route path='/placetypes' element={<Dashboard/>}/>
          <Route path='/placetypes/add' element={<Dashboard/>}/>
          <Route path='/placetypes/modify'element={<Dashboard/>} />
          {/* for now i think delete doesn't need a page */}

          <Route path='/places/:id' element={<Dashboard/>}/>
          <Route path='/friends'element={<Dashboard/>} />
          <Route path='/friends/:id' element={<Dashboard/>}/>
          {/* if the route it is not defined it redirect the user to the login page */}
          <Route path='*' element={<Login/>} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
