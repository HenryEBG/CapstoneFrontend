import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableHeader } from "../components/TableHeader"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"
import { Button } from "../components/Button"


export const Users = () => {
  return (
    <div className="principalContainer">
      <TitlePage title="Manage User Page"></TitlePage>
      <TableContainer>
        <TableButtons>
        <Button buttonColor={"blue"} >  
        <ion-icon name="person-add-outline"></ion-icon>
                </Button>
        </TableButtons>
        <TableHeader> 
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Actions</TableCell>
        </TableHeader>
        <TableRow>
        <TableCell align="left">ptbadman</TableCell>
              <TableCell align="left">Henry Berganza</TableCell>
              <TableCell align="left">859 521 3036</TableCell>
              <TableCell align="right">
                <Button buttonColor={"green"} ><ion-icon name="eye-outline"></ion-icon></Button>
                <Button buttonColor={"#4dcfe8"} ><ion-icon name="create-outline"></ion-icon></Button>
                <Button buttonColor={"red"} ><ion-icon name="trash-outline"></ion-icon></Button>
              </TableCell>
        </TableRow>
      </TableContainer>  

    </div>
  )
}