const NewStaff =()=>{
  return(
    <div className="newstaff_cont">

      <h5>Add Staff</h5>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor=""><h4>Full Name</h4></label>
          <select name="" id="">
            <option value="contract">Contract</option>
            <option value="contract">Fixed</option>
          </select>
        </form>

        <form action="">
          <label htmlFor=""><h4>Salary</h4></label>
          <input type="text" placeholder="Enter pay" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor=""><h4>Date of Birth</h4></label>
          <input type="date" />
        </form>

        <form action="">
          <label htmlFor=""><h4>Email Address</h4></label>
          <input type="email" placeholder="Enter email address" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor=""><h4>Phone Number</h4></label>
          <input type="text" placeholder="Enter Phone number" />
        </form>

        <form action="">
          <label htmlFor=""><h4>Address</h4></label>
          <input type="text" placeholder="Enter home address" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor=""><h4>Name of Next Kin</h4></label>
          <input type="text" placeholder="Enter full name" />
        </form>

        <form action="">
          <label htmlFor=""><h4>Next of Kin Number</h4> </label>
          <input type="number" placeholder="Enter phone number" />
        </form>
        
      </div>

      <button className="filled-btn"><h4>Submit</h4></button>

    </div>
  );
}

export default NewStaff;