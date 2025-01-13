import { Link } from "react-router-dom";

const AdminNav=()=>{

  const storedUser = localStorage.getItem('team');
  const user = JSON.parse(storedUser);
 
  return(
    <div className="adminavbar_cont">

      <div className="left-adminav">
        <h4>Dashboard</h4>
      </div>

      <div className="right-adminav">
        
        <Link to="/admin/user" className="right-icon">
          <h4> {((user.firstname)[0]).toUpperCase()}{((user.lastname)[0]).toUpperCase()} </h4>
        </Link>

        <div className="right-logout">
          <img src="/icons/Logout.svg" alt="" />
          <h4>Logout</h4>
        </div>

      </div>
      
    </div>

  );

}

export default AdminNav;
