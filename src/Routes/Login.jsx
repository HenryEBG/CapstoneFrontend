import { useRef,useEffect,useState } from 'react';
import { useSessionContext } from '../context/SessionProvider.jsx'
import { TitlePage } from '../components/TitlePage.jsx';
export const Login = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const mySession=useSessionContext();

  const [user,setUser]=useState([]);

  const fetchUser = async () => {
    await fetch ('http://myserver:port/user/:username')
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });
  }

  useEffect(() => {
    fetchUser();
  },[user])

  const handleSubmit =(event) => {
    const founded=user
  }
  return(
<>
     <div className='principalContainer'>
        <TitlePage title={"RefugeeConnect Login"}></TitlePage>
        <form className="formContainer">
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
