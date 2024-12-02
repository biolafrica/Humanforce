const AdminNav=()=>{

  return(
    <div className="adminavbar_cont">
      <div className="left-adminav">
        <h4>Dashboard</h4>
      </div>

      <div className="right-adminav">
        
        <div className="right-icon">
          <h4>AB</h4>
        </div>

        <div className="right-logout">
          <img src="icons/Logout.svg" alt="" />
          <h4>Logout</h4>
        </div>

      </div>
      
    </div>

  );

}

export default AdminNav;
