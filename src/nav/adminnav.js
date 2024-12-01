const AdminNav=()=>{

  return(
    <div className="adminavbar_cont">
      <div className="left-adminav">
        <h3>Dashboard</h3>
      </div>

      <div className="right-adminav">
        <div className="right-icon">
          <h4>AB</h4>
        </div>

        <div className="right-logout">
          <img src="icons/Logout" alt="" />
          <h4>Logout</h4>
        </div>

      </div>
      
    </div>

  );

}

export default AdminNav;
