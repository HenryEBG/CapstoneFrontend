import { TitlePage } from "../components/TitlePage"
import { TableContainer } from "../components/TableContainer"
import { TableRow } from "../components/TableRow"
import { TableCell } from "../components/TableCell"
import { TableButtons } from "../components/TableButtons"
import { Button } from "../components/Button"
// import { useCallback, useState } from "react"
// import { useDropzone } from 'react-dropzone'
// import {useForm} from 'react-hook-form'
import { createUser } from '../api/user'
import { useRef,useEffect,useState } from 'react';
import { useSessionContext } from "../context/SessionProvider"
import { useNavigate, useParams } from "react-router-dom";

//import { useProductContext } from '../context/SessionProvider.jsx'

export const ModifyUser = () => {

  const [user,setUser] =useState({});
  const params = useParams();
  const userData = useSessionContext();
  const navigate=useNavigate();

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const userTypeRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipcodeRef = useRef();
  const countryRef = useRef();
  const regionRef = useRef();
  const religionRef = useRef();
  const genderRef = useRef();
  
  const fetchUser = async()=> {
    await fetch (`${userData.BASE_URL}/users/${[params.id]}`)
    .then((res) => res.json())
    .then((data)=> {
      setUser(data);
      nameRef.current.value=data.name;
      phoneRef.current.value=data.phone;
      emailRef.current.value = data.email;
      userTypeRef.current.value =data.userType;
      streetRef.current.value =data.street;
      cityRef.current.value =data.city;
      stateRef.current.value =data.state;
      zipcodeRef.current.value = data.zipcode;
      countryRef.current.value =data.country;
      regionRef.current.value = data.region;
      religionRef.current.value = data.religion;
      genderRef.current.value =data.gender;
      console.log(data.religion)
    })
  } 

  useEffect(() => {
    fetchUser();

  },[]);

  //const userData = useProductContext();
  
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //console.log(zipcodeRef.current.value)
      const body = {
        name: nameRef.current.value,
        username: user.username,
        password: user.password,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        userType: userTypeRef.current.value,
        street: streetRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zipcode: zipcodeRef.current.value,
        country: countryRef.current.value,
        region: regionRef.current.value,
        religion: religionRef.current.value,
        gender: genderRef.current.value,
        _id:user._id
      };


      const response = await fetch(`${userData.BASE_URL}/users/${user._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      if (response.status !== 201) {
        return;
      }
      else {
        navigate(`/users`)
      }


      // nameRef.current.value="";
      // usernameRef.current.value="";
      // phoneRef.current.value="";
      // passwordRef.value="";
      // cityRef.value="";
      // streetRef.value="";
      // emailRef.value="";
      // zipcodeRef.value="";

    } catch (error) {

    }


  }

  return (
    <form onSubmit={handleSubmit} className="formFormat">
      <div className="principalContainer">
        <TitlePage title="Modify User"></TitlePage>
        <TableContainer>
          <TableButtons>
            {/* <Button buttonColor={"blue"} type="submit" >
          <ion-icon name="save-outline"></ion-icon>
        </Button> */}
            <input type="submit" style={{ backgroundColor: "blue", color: "white" }} value="Update User" />
          </TableButtons>

          <TableRow>
            <TableCell align={"center"}>

            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>

            <TableCell>
              <TableCell align={"right"}>User Type:</TableCell>
              <TableCell><select ref={userTypeRef}>
                <option value="Administrator">Administrator</option>
                <option value="Refugee">Refugee</option>
                <option value="Volunteer">Volunteer</option>


              </select>
              </TableCell>
            </TableCell>

          </TableRow>

          <TableRow>
            <TableCell>
              <TableCell align={"right"}>Username:</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableCell>
            <TableCell>
              <TableCell> </TableCell>
              <TableCell></TableCell>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TableCell align={"right"}>Phone:</TableCell>
              <TableCell><input type="text" placeholder="phone" ref={phoneRef} /></TableCell>
            </TableCell>

            <TableCell>
              <TableCell align={"right"}>Email:</TableCell>
              <TableCell><input type="email" placeholder="email" ref={emailRef} /></TableCell>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TableCell align={"right"}>Name:</TableCell>
              <TableCell><input type="text" placeholder="fullname" ref={nameRef} /></TableCell>
            </TableCell>

             <TableCell>
              <TableCell align={"right"}></TableCell>
              <TableCell></TableCell>
            </TableCell>           
          </TableRow>

          <TableRow>
            <TableCell align={"center"}>Adress</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TableCell align={"right"}>Street:</TableCell>
              <TableCell><input type="text" placeholder="Street" ref={streetRef} /></TableCell>
            </TableCell>

            <TableCell>
              <TableCell align={"right"}>City:</TableCell>
              <TableCell><input type="text" placeholder="City" ref={cityRef} /></TableCell>
            </TableCell>
            </TableRow>
            <TableRow>           
            <TableCell>
              <TableCell align={"right"}>State:</TableCell>
              <TableCell><input type="text" placeholder="State" ref={stateRef} /></TableCell>
            </TableCell>

            <TableCell>
              <TableCell align={"right"}>Zipcode:</TableCell>
              <TableCell><input type="text" placeholder="zipcode" ref={zipcodeRef} /></TableCell>
            </TableCell>
          </TableRow>


          <TableRow>
            <TableCell align={"center"}>Society Segment</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <TableCell align={"right"}>Country:</TableCell>
              <TableCell><input type="text" placeholder="Country" ref={countryRef} /></TableCell>
            </TableCell>

            <TableCell>
              <TableCell align={"right"}>Region:</TableCell>
              <TableCell>
                <select ref={regionRef}>
                  <option value="East Asia">East Asia</option>
                  <option value="East Europe">East Europe</option>
                  <option value="Latin America">Latin America</option>
                  <option value="Africa">Africa</option>
                </select>
              </TableCell>
            </TableCell>
            </TableRow>


<TableRow>

            <TableCell>
              <TableCell align={"right"}>Religion:</TableCell>
              <TableCell><select ref={religionRef}>
                <option value="Christianity">Christianity</option>
                <option value="Judaism">Judaism</option>
                <option value="Islam">Islam</option>
                <option value="Buddism">Buddism</option>
                <option value="Induism">Induism</option>
                <option value="Mormonism">Mormonism</option>
                <option value="Other religion">Other religion</option>
                <option value="No answer">No answer</option>

              </select>
              </TableCell>
            </TableCell>

            <TableCell>
              <TableCell align={"right"}>Gender::</TableCell>
              <TableCell> <select ref={genderRef}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Not Answer">Not Answer</option>
              </select>
              </TableCell>
            </TableCell>
          </TableRow>

          <TableButtons><div style={{ height: "40px" }}></div></TableButtons>
        </TableContainer>
      </div>
    </form>
  )
}
