import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";



const AdminNav=({header})=>{
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

      <div className="left_container">
        <Link to="/admin" className="side-logo">
          <img src="/icons/Group work.svg" alt="" />
        </Link>

      </div>

      <div className="right_container">
        <div className="left-adminav">
          <h4>{header}</h4>
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

    </div>

  );

}

export default AdminNav;
