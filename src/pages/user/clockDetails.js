import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/userFetch";
import StaffDetails from "../../components/userPage/staffDetails";
import StaffClock from "../../components/userPage/staffClock";
import {clockButton, clockButtonClass} from "../../components/userPage/clockButton";
import axios from "axios";
import { useState } from "react";
import DisplayTimer from "../../components/displayTimer";
import { AlertPopup, useAlert } from "../../components/alert";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading";


const ClockDetails =()=>{
  const {id} = useParams();
  const {alert, showAlert} = useAlert();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const url = `http://localhost:4000/clock/${id}`;
  const storedUser = localStorage.getItem('user');
  const user =  JSON.parse(storedUser);

  const[refresh, setRefresh] = useState(false);
  const{data, isLoading, errorMessage} = UseFetch(url,token,refresh);

  const patchAttendance = async(updates)=>{
    try {
      const response = await  axios.patch(`http://localhost:4000/clock/${id}`, updates, {
        headers:{ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      });
      setRefresh((prev)=> !prev);
      
    } catch (error) {
      console.error("Error updating attendance:", error);

      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Error updating attendance", "error");
      }
     
    }
  }

  const handleSubmit = (e)=>{
    const value = e.target.textContent;

    if(value === "Start Break"){
      patchAttendance({break_start : new Date()});

    } else if(value === "End Break"){
      patchAttendance({break_end : new Date()});

    }else if(value === "End Work"){
      patchAttendance({clock_out : new Date()});

    }
    
  }

  if(isLoading) return(<Loading width={200} height={200}/>)
  if (errorMessage)return<div>{errorMessage}</div>
  if(data)
    return(
      <div className="clock_container">

        <DisplayTimer time={data.attendance} />

        <div className="clockstatus_container">
          <StaffDetails staff={user}/>
          <StaffClock clock ={data.attendance}/>
        </div>

        <button 
          className={clockButtonClass(data.attendance)}
          onClick={handleSubmit}
        >
          <h4>{clockButton(data.attendance)}</h4>
        </button>


        {alert.visible && (
          <AlertPopup 
            visible={alert.visible} 
            message={alert.message} 
            type={alert.type}
          />
        )}
  
      </div>
    )
  

}

export default ClockDetails