import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";



const AdminNav=()=>{
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('team');
  const user = JSON.parse(storedUser);

  const handleLogout = ()=>{
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("team");
    navigate("/admin/Login");
  }
 
  return(
    <div className="adminavbar_cont">

      <div className="left-adminav">
        <h4>Dashboard</h4>
      </div>

      <div className="right-adminav">
        
        <Link to="/admin/user" className="right-icon">
          <h4> { ((user.firstname)[0]).toUpperCase()}{((user.lastname)[0]).toUpperCase()} </h4>
        </Link>

        <button onClick={handleLogout} className="right-logout text-btn">
          <img src="/icons/Logout.svg" alt="" />
          <h4>Logout</h4>
        </button>

      </div>
      
    </div>

  );

}

export default AdminNav;
