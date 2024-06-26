// page to manage the login of the users
import { useRef } from 'react';
import { useSessionContext } from "../context/SessionProvider"
import { useNavigate } from "react-router-dom";
import { TitlePage } from '../components/TitlePage.jsx';

export const Login = () => {
// hooks to manage the inputs
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  // context variable to mantain the session data
  const userData=useSessionContext();
  const navigate=useNavigate()
  
  //function to handle the submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //create the body of the request
    const body= {
      username:usernameInputRef.current.value,
      password:passwordInputRef.current.value
    }
    

    //call the API
    await fetch(`${userData.BASE_URL}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )
      .then((res)=>res.json())
      .then((data)=> { 
        // console.log(data);
        userData.dispatch({type:"LOGIN",value:data})
        navigate("/")
       // console.log(res)
       })
  }
 

  return(
<>
     <div className='principalContainer'>
        <TitlePage title={"RefugeeConnect Login"}></TitlePage>
        <form className="formContainer" onSubmit={handleSubmit}>
          <input className="inputLogin" ref={usernameInputRef} type="text" placeholder="username"/>
          <input className="inputLogin" ref={passwordInputRef} type="password" placeholder="passowrd"/>
          <button type="submit"  className="submitLogin">Login</button>
        </form>
      </div> 
    </>
  
  )
}
