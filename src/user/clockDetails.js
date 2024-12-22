import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import formatMTime from "../components/formatmtime"
import StaffDetails from "../components/staffDetails"
import StaffClock from "../components/staffClock"
import {clockButton, clockButtonClass} from "../components/clockButton"
import axios from "axios"
import { useState } from "react"



const ClockDetails =()=>{
  const {id} = useParams();
  console.log("attendance id", id)

  const url = `http://localhost:4000/clock/${id}`;
  const[refresh, setRefresh] = useState(false);
  const{data, isLoading, errorMessage} = useFetch(url,refresh);
  if(data){console.log("fetched data",data)}

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
  console.log("logIn user", user);

  const patchAttendance = async(updates)=>{
    try {
      const response = await  axios.patch(`http://localhost:4000/clock/${id}`, updates);
      console.log("Update Response:", response.data);
      setRefresh((prev)=> !prev);
      
    } catch (error) {
      console.error("Error updating attendance:", error)
      
    }
    

  }

  const handleSubmit = (e)=>{
    const value = e.target.textContent;

    if(value === "Start Break"){
      patchAttendance({break_start : new Date()});
    } else if(value === "End Break"){
      patchAttendance({break_end : new Date()});
    }else if("End Work"){
      const clock_out = Date.now();
      patchAttendance({clock_out : new Date()});
    }
    
    

  }
  

  if (isLoading)return<div>.....Loading</div>
  if (errorMessage)return<div>{errorMessage}</div>
  if(data)
    return(
      <div className="clock_container">

        <div className="timer_container">
          <h3><b>09:00:53</b></h3>
        </div>

        <div className="clockstatus_container">

          <StaffDetails staff={user}/>
          <StaffClock clock ={data}/>

        </div>

        <button 
          className={clockButtonClass(data.data)}
          onClick={handleSubmit}
        >
          <h4>{clockButton(data.data)}</h4>
        </button>

      </div>

    )
  

}

export default ClockDetails