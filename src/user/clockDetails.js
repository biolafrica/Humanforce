import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import formatMTime from "../components/formatmtime"
import StaffDetails from "../components/staffDetails"
import StaffClock from "../components/staffClock"
import {clockButton, clockButtonClass} from "../components/clockButton"



const ClockDetails =()=>{
  const {id} = useParams();
  console.log("attendance id", id)

  const url = `http://localhost:4000/clock/${id}`;
  const{data, isLoading, errorMessage} = useFetch(url);
  if(data){console.log("fetched data",data)}

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  console.log("logIn user", user);
  

  if(isLoading)return(<div>.....Loading</div>)
  if(errorMessage)return(<div>{errorMessage}</div>)
  if(data) return(

    <div className="clock_container">

      <div className="timer_container">
        <h3><b>09:00:53</b></h3>
      </div>

      <div className="clockstatus_container">

        <StaffDetails staff={user}/>
        <StaffClock clock ={data}/>

      </div>

      <button className={clockButtonClass(data.data)}><h4>{clockButton(data.data)}</h4></button>

    </div>

  )
  

}

export default ClockDetails