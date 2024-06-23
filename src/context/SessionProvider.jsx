//just import the functions needed for the react library
import { useReducer, createContext, useContext } from "react";

//create a new isntance of the context to save global variables of session
const SessionContext = createContext();

//assign the new context to a custom hook to use reducer and context more easyly
const useSessionContext = () => {
  return useContext(SessionContext);
}

//create the initial state of the context hook
const initialState = {
  userLogin: true,//flag that let me know if the user is login or not, maybe could be substitute with localstorage
  username: "", //to save the username in the entire app
  name: "",// if it is necessary to print the name of the user in the forms or documents
  places: [],//array to save all the places the user has mark with favorites to make a filter
  friends: [],//array with all the friends links to check if can see some info of them
  userType:"Refugee",
  administrator:true
}

//reducer function to get an action and realize some procedures
const sessionReducer = (state, action) => {
  // switch (action.type) {
  //   default:
  //   }
       return state;
}

//create the provider function of the context hook
const SessionProvider = ({ children }) => {
  //create the usereducerhooker
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  return (
    //we return a component with the actual value of the state
    <SessionContext.Provider
      value={{
        userLogin: state.userLogin,
        username: state.username,
        name: state.name,
        places: state.favoritePlaces,
        friends: state.friends,
        userType:state.userType,
        administrator:state.administrator
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

//export the component Sessionprovider and the useSessionContext custom hook
export { SessionProvider, useSessionContext }