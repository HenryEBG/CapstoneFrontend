import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"
import { Button } from "../components/Button"

import { useRef,useEffect,useState } from 'react';
import { useSessionContext } from "../context/SessionProvider"
import { useNavigate, useParams } from "react-router-dom";

export const User = () => {
  const [user,setUser] =useState({});
  const params = useParams();
  const userData = useSessionContext();
  const navigate= useNavigate();

  const fetchUser = async()=> {
    await fetch (`${userData.BASE_URL}/users/${[params.id]}`)
    .then((res) => res.json())
    .then((data)=> {
      setUser(data);
      
    })
  } 

  useEffect(() => {
    fetchUser();
  },[]);

  return (
    
    <div className="principalContainer">
      <TitlePage title="User Info"></TitlePage>
      <TableContainer>
      <TableButtons>   <Button buttonColor={"blue"} >  
        <ion-icon name="return-up-back-outline"  onClick={()=>navigate(`/users`)} ></ion-icon>
                </Button></TableButtons>
        <TableRow> 
          <TableCell>
            <div className="labelFormat">Username:</div>
            <div className="inputFormat">{user.username}</div>
          </TableCell>

          <TableCell align={"center"}>
            <div className="inputPhoto" ><img src="/KRMLogo.jpg" alt="photo of the user" style={{width:"20vh"}} /></div>
          </TableCell>

        </TableRow> 
        <TableRow>
          <TableCell>
            <div className="labelFormat">Name:</div>
            <div className="inputFormat">{user.name}</div>

          </TableCell>
          </TableRow> 
          <TableRow>         
          <TableCell>
              <div className="labelFormat">Email:</div>
              <div className="inputFormat">{user.email}</div>
          </TableCell>

          <TableCell>
            <div className="labelFormat">Phone:</div>
            <div className="inputFormat">{user.phone}</div>

          </TableCell>
          </TableRow> 
          <TableRow>          
          <TableCell>
              <div className="labelFormat">Address:</div>
              <div className="inputFormat">{`${user.street} ${user.city} ${user.state} ${user.zipcode}`}</div>
          </TableCell>
        </TableRow>

         <TableRow>
          <TableCell>
            <div className="labelFormat">Country:</div>
            <div className="inputFormat">{user.country}</div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Region:</div>
              <div className="inputFormat">{user.region}</div>
          </TableCell>
          </TableRow> 
          <TableRow>
          <TableCell>
              <div className="labelFormat">Religion:</div>
              <div className="inputFormat">{user.religion}</div>
          </TableCell>
          <TableCell>
              <div className="labelFormat">Gender:</div>
              <div className="inputFormat">{user.gender}</div>
          </TableCell>

        </TableRow>       
        <TableButtons><div style={{height:"40px"}}></div></TableButtons>
      </TableContainer>
    </div>

  )
}