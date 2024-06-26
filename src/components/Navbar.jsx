// create a dinamic navbar
import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

import { useSessionContext } from '../context/SessionProvider.jsx'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Navbar= () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  const navigate =useNavigate();
  const userData=useSessionContext();
  
  const handleLogout = async (event) => {
    event.preventDefault();

    //crear el cuerpo
    const body= {
      //username:usernameInputRef.current.value,
      //password:passwordInputRef.current.value
    }
    console.log(body)

    //hacer la llamada a la api
    await fetch(`${userData.BASE_URL}/users/logout`
    // , {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(body),
    //     }
      )
      .then((res)=>res.json()
    )
      .then((data)=> { 
        // console.log(data);
        userData.dispatch({type:"LOGOUT"})
        navigate("/login")
       // console.log(res)


       })
  }

    return (
    <>
      <NavContainer>
        <div className='logoContainer' >
        <img className='logo' src="/KRMLogo.jpg" alt="KRM logo" />
        <h2>Refugee<span>Connect</span></h2>
        </div>
      
        <div className={`links ${clicked ? 'active' : ''}`}>
            {userData.administrator ?(
              <>
              <Link className='navbarLink' to="/">Manage-Places</Link>
              <Link className='navbarLink navColor' to="/users">Manage-Users</Link>
              </>
              ):null}
            
            {userData.userLogin ?(
              <Link className='navbarLink' to="/" onClick={handleLogout}>Logout</Link>
            ):null}
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    color: black;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: 1vh;
  background-color: #faaa44;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .navbarLink{
    color: black;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    .navbarLink{
      color: black;
      font-size: 4vw;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      .navbarLink{
        font-size: 2vh;
        color: black;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30vh;
    left: 0;
    right: 0;
    text-align: center;
    .navbarLink{
      font-size: 1rem;
      margin-top: 1rem;
      color: black;
    }
    height : 5vh;
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    
  
  }
`

const BgDiv = styled.div`
  background-color: #black;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`