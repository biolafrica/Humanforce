const NewTeam =()=>{
  return(
    <div className="newteam_cont">

      <div className="newteam_header">
        <h3>Add Team</h3>
        <h4>Kindly enter the details of the team member you want to add.</h4>
      </div>

      <div className="newteam_body">
        <form action="">
          <label htmlFor="">Name</label>
          <select name="name" id="">
            <option value="oletubo">Oletubo Damilare</option>
            <option value="abiodun">Abiodun Biobaku</option>
            <option value="dare">Dare Sokabi</option>
          </select>
          <div className="error_text"></div>


          <label htmlFor="">Role</label>
          <select name="role" id="">
            <option value="finance">Finance</option>
            <option value="operation">Operations</option>
            <option value="basic">Basic</option>
            <option value="admin">Admin</option>
          </select>
          <div className="error_text"></div>

          <button>Submit</button>
        </form>
      </div>

      

    </div>
  );
};

export default NewTeam;