
// component to add a button in the pages
export const Button =({buttonColor, children }) => {
  return (
    
    <div className="buttonFormat" style={{backgroundColor:buttonColor}}>{children}</div>
      


  )
}