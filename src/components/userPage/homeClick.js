import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AlertPopup,useAlert } from "../common/alert";
import { getCordinates, getDistance, handleGeoLocationError, handleApiError } from "../../utils/geolocation";
import { useState } from "react";

const HomeClicks = ({business, workingHours})=>{
  const businessData = business.business[0];
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const {alert, showAlert} = useAlert();

  const now = new Date();
  const currentDay = now.toLocaleString("en-US", {weekday: 'long'}).toLowerCase();

  const hour = workingHours[0].days
  const day = hour[currentDay]

  const handleStartWorkClick =async()=>{
    
    if(day.isClosed === true){
      return showAlert("we are not operational today", "info")
    }

    if(!navigator.geolocation){
      return showAlert("Geolocation is not supported by your browser", "error")
    }

    navigator.geolocation.getCurrentPosition(
      async(position) =>{
        const{latitude : userLat, longitude: userLng} = position.coords;

        try {
          const [coords1, coords2]= await Promise.all([
            getCordinates(businessData.business_address_I),
            getCordinates(businessData.business_address_II)
          ]);

          if(!coords1 && !coords2){
            return showAlert("No business location added", "error")
          }

          const radiusLimit = 500;

          const isWithinRange = 
          (coords1 && getDistance(userLat, userLng, coords1.lat, coords2.lng) <= radiusLimit) || 
          (coords2 && getDistance(userLat, userLng, coords2.lat, coords2.lng) <= radiusLimit);

          if(!isWithinRange){
            return showAlert("You are only allowed to clock in at work", "error");
          }

          try {
            const response = await  axios.post(`${process.env.REACT_APP_API_URL}/clock`, {token});
            if(response.data){
              navigate(`/clock/${response.data.id}`)
            }
          } catch (error) {
            handleApiError(error, navigate, showAlert); 
          }
          
        } catch (error) {
          console.error("Location fetching error:", error);
          showAlert("Error fetching location data", "error")
        }

      },
      (error)=>{
        handleGeoLocationError(error, showAlert)
      }
    );

  };

  const handleEndWorkClick = async() =>{

    if(day.isClosed === true){
      return showAlert("we are not operational today", "info")
    }else{
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/clocked`, {token});
        const data = response.data;
        
        if(data.id){
          return navigate(`/clock/${data.id}`);
        } else if (data.message){
          return showAlert("You are yet to clock in", "info")
        }
        
      } catch (error) {
        if(error.response && error.response.status === 500){
          navigate("/server-error")
        }else{
          console.error("Error:", error.response?.data || error.message);
        }
        
      }

    }
  

  };

  return(
    <div className="home_container">

      <div className="home_up">

        <Link to="" className="clockin_container" onClick={handleStartWorkClick}>
          <img src="icons/START SHIFT.svg" alt="" />
          <h4>Start Work</h4>
          
        </Link>

        <Link to="" className="clockout_container" onClick={handleEndWorkClick}>
          <img src="icons/END SHIFT.svg" alt="" />
          <h4>End Work</h4>
        </Link>

      </div>
      
      <div className="home_down">

        <Link to= "/Payslip" className="payroll_container">
          <img src="icons/PAYRI.svg" alt="" />
          <h4>Payslip</h4>
        </Link>

        <Link to="/Attendance" className="attendance_container">
          <img src="icons/ATTENDANCE.svg" alt="" />
          <h4>Attendance</h4>
        </Link>

      </div>

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




export default HomeClicks