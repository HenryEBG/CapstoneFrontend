export const TableCell = ({align, children}) => {
  return(
    <div className="tableCell" style={{justifyContent:align}} >{children}</div>
  )
}