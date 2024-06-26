// component that give format to a cell of the table
export const TableCell = ({align, children}) => {
  return(
    <div className="tableCell" style={{justifyContent:align}} >{children}</div>
  )
}