const NewTeam =()=>{
  return(
    <div className="newteam_cont">

      <div className="newteam_header">
        <h4>Add Team</h4>
        <h6 className="sec">Kindly enter the details of the team member you want to add.</h6>
      </div>

      <div className="newteam_body">

        <form action="">
          <label htmlFor=""><h4>Name</h4></label>
          <select name="name" id="">
            <option value="oletubo">Oletubo Damilare</option>
            <option value="abiodun">Abiodun Biobaku</option>
            <option value="dare">Dare Sokabi</option>
          </select>
          <div className="error_message"></div>


          <label htmlFor=""><h4>Role</h4></label>
          <select name="role" id="">
            <option value="finance">Finance</option>
            <option value="operation">Operations</option>
            <option value="basic">Basic</option>
            <option value="admin">Admin</option>
          </select>
          <div className="error_message"></div>

          <button className="filled-btn"><h4>Submit</h4></button>
          
        </form>

      </div>

      

    </div>
  );
};

export default NewTeam;