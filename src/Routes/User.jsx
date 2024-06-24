import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"

export const User = () => {
  return (
    
    <div className="principalContainer">
      <TitlePage title="User Info"></TitlePage>
      <TableContainer>
      <TableButtons><div style={{height:"40px"}}></div></TableButtons>
        <TableRow> 
          <TableCell>
            <div className="labelFormat">Username:</div>
            <div className="inputFormat">ptbadman</div>
          </TableCell>

          <TableCell align={"center"}>
            <div className="inputPhoto" ><img src="/KRMLogo.jpg" alt="photo of the user" style={{width:"20vh"}} /></div>
          </TableCell>

        </TableRow> 
        <TableRow>
          <TableCell>
            <div className="labelFormat">Name:</div>
            <div className="inputFormat">Henry Estuardo Berganza</div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Email:</div>
              <div className="inputFormat">berganza386@gmail.com</div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <div className="labelFormat">Phone:</div>
            <div className="inputFormat">8593535353</div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Adress:</div>
              <div className="inputFormat">5463 foregin St Cincinnaty OH 41324</div>
          </TableCell>
        </TableRow>

         <TableRow>
          <TableCell>
            <div className="labelFormat">Country:</div>
            <div className="inputFormat">Guatemala</div>

          </TableCell>
          <TableCell>
              <div className="labelFormat">Region:</div>
              <div className="inputFormat">LatinAmerica</div>
          </TableCell>

          <TableCell>
              <div className="labelFormat">Religion:</div>
              <div className="inputFormat">Christian</div>
          </TableCell>
          <TableCell>
              <div className="labelFormat">Gender:</div>
              <div className="inputFormat">Male</div>
          </TableCell>

        </TableRow>       
        <TableButtons><div style={{height:"40px"}}></div></TableButtons>
      </TableContainer>
    </div>

  )
}