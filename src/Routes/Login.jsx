import { useRef,useEffect,useState } from 'react';
import { useSessionContext } from "../context/SessionProvider"
import { useNavigate } from "react-router-dom";
import { TitlePage } from '../components/TitlePage.jsx';

export const Login = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const userData=useSessionContext();

  //const [user,setUser]=useState([]);

  // const fetchUser = async () => {
  //   await fetch ('http://myserver:port/user/:username')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setUser(data);
  //   });
  // }

  // useEffect(() => {
  //   fetchUser();
  // },[user])

  const handleSubmit = async (event) => {
    event.preventDefault();

    //crear el cuerpo
    const body= {
      username:usernameInputRef.current.value,
      password:passwordInputRef.current.value
    }
    console.log(body)

    //hacer la llamada a la api
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
      {/* <div className="insideContainer"> */}
        {/* <div className="leftContainer"> */}
        {/* <img src="./loginPicture.png" alt="Trendy Pants and Shoes" className="loginImage" /> */}
        {/* </div> */}
        
        {/* <div className="rightContainer">
        <div className="titleLogin">RefugeeConnect Login</div> */}

          
        
        {/* </div>
        
      </div>   
      </div>
       */}
      {/* <Footer/> */}
    </>
  
  )
}
