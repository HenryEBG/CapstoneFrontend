// create a table to manage all the users add, delete, modify or add new users

import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableHeader } from "../components/TableHeader"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"
import { Button } from "../components/Button"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSessionContext } from "../context/SessionProvider"


export const Users = () => {
  const [users,setUsers] =useState([]);
  const userData = useSessionContext();
  const navigate=useNavigate();
  
  const fetchUsers = async()=> {
    await fetch (`${userData.BASE_URL}/users/`)
    .then((res) => res.json())
    .then((data)=> {
      setUsers(data);
    })
  } 

  const deleteUser =async(id) => {
    try {
      await fetch (`${userData.BASE_URL}/users/${id}` ,       {
        method: 'DELETE',
        }
      ).then((res) => res.json()).then((data)=> {
      const filtered = users.filter((b) => b._id !== data._id);
      setUsers(filtered);
         })
    } catch (error) {
      console.log(error);
    }

}

  useEffect(() => {
    fetchUsers();
  },[]);
  return (
    
    <div className="principalContainer">
      <TitlePage title="Manage User Page"></TitlePage>
      <TableContainer>
        <TableButtons>
        <Button buttonColor={"blue"} >  
        <ion-icon name="person-add-outline"  onClick={()=>navigate(`/users/add`)} ></ion-icon>
                </Button>
        </TableButtons>
        
        <TableHeader> 
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Actions</TableCell>
        </TableHeader>
        {users.length? users.map((user) => (

        
        <TableRow key={user._id}>
        <TableCell align="left">{user.username}</TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.phone}</TableCell>
              <TableCell align="right">
                
                <Button buttonColor={"green"} ><ion-icon name="eye-outline" onClick={()=>navigate(`/users/${user._id}`)}></ion-icon></Button>
                <Button buttonColor={"#4dcfe8"} ><ion-icon name="create-outline" onClick={()=>navigate(`/users/modify/${user._id}`)} ></ion-icon></Button>
                <Button buttonColor={"red"} ><ion-icon name="trash-outline" onClick={()=>deleteUser(user._id)}></ion-icon></Button>
              </TableCell>
        </TableRow>
        )
      )
      :
      <TableRow>Not exists any user</TableRow>
    }
      </TableContainer>  

    </div>
  )
}