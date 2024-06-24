import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"
import { Button } from "../components/Button"

export const AddUser = () => {
  return (
    <form action="" className="formFormat">
    <div className="principalContainer">
      <TitlePage title="Add a New User"></TitlePage>
      <TableContainer>
      <TableButtons>
      <Button buttonColor={"blue"} >  
        <ion-icon name="save-outline"></ion-icon> 
                </Button>
        </TableButtons>
        <TableRow> 
          <TableCell>
            <div>
            <div className="labelFormat">Username:</div>
            <div className="inputFormat"><input type="text"placeholder="username" /></div>
            </div>
            <div>
            <div className="labelFormat">Password:</div>
            <div className="inputFormat"><input type="password"  placeholder="password"/></div>
              
            </div>

          </TableCell>

          <TableCell align={"center"}>
            <div className="inputPhoto" ><img src="/KRMLogo.jpg" alt="photo of the user" style={{width:"20vh"}} /></div>
          </TableCell>

        </TableRow> 
        <TableRow>
          <TableCell>
            <div className="labelFormat">Name:</div>
            <div className="inputFormat"><input type="text" /></div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Email:</div>
              <div className="inputFormat"><input type="email" /></div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <div className="labelFormat">Phone:</div>
            <div className="inputFormat"><input type="text" /></div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Adress:</div>
              <div className="inputFormat"><div>Street: <input type="text" /></div> <div>City : <input type="text" /> State: <input type="text" /></div> <div>ZipCode: <input type="number" /></div>  </div>
          </TableCell>
        </TableRow>

         <TableRow>
          <TableCell>
            <div className="labelFormat">Country:</div>
            <div className="inputFormat"><input type="text" /></div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Region:</div>
              <div className="inputFormat"><select name="" id="">
                <option value="1">East Asia</option>
                <option value="2">East Europe</option>

                </select></div>
          </TableCell>

          <TableCell>
              <div className="labelFormat">Religion:</div>
              <div className="inputFormat">
                <select name="" id="">
                    <option value="1">Christianity</option>
                    <option value="2">Judaism</option>
                    <option value="3">Islam</option>
                    <option value="4">Buddism</option>
                    <option value="5">Induism</option>
                    <option value="6">Mormonism</option>
                    <option value="7">Other religion</option>
                    <option value="8">No answer</option>

                  </select></div>
          </TableCell>
          <TableCell>
              <div className="labelFormat">Gender:</div>
              <div className="inputFormat">
                <select name="" id="">
                  <option value="F">Female</option>
                  <option value="F">Male</option>
                  <option value="F">Other</option>
                  <option value="F">Not Answer</option>
                </select></div>
          </TableCell>

        </TableRow>       
        <TableButtons><div style={{height:"40px"}}></div></TableButtons>
      </TableContainer>
    </div>
    </form>
  )
}