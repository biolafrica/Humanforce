import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage=()=>{

  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");
  console.log(token);

  const handleStartWorkClick =async()=>{
    try {
      const response = await  axios.post("http://localhost:4000/clock", {token});
      const data = response.data;
      if(data){
        navigate(`/clock/${data.id}`);
      }
      
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
    
  }

  const handleEndWorkClick = async() =>{
    try {
      const response = await axios.post("http://localhost:4000/clocked", {token});
      const data = response.data;
      console.log(data);

      if(data.id){
        return navigate(`/clock/${data.id}`);
      } else if (data.message){
        return alert("You are yet to clock in");
      }
      
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }

  }

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
      
    </div>
  )
}

export default Homepage;