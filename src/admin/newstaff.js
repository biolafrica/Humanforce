const NewStaff =()=>{
  return(
    <div className="newstaff_cont">

      <div className="newstaff_column">

        <form action="">
          <label htmlFor="">Full Name</label>
          <select name="" id="">
            <option value="contract">Contract</option>
            <option value="contract">Fixed</option>
          </select>
        </form>

        <form action="">
          <label htmlFor="">Salary</label>
          <input type="text" placeholder="enter pay" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor="">Date of birth</label>
          <input type="date" />
        </form>

        <form action="">
          <label htmlFor="">Email Address</label>
          <input type="email" placeholder="enter email address" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor="">Phone Number </label>
          <input type="text" placeholder="enter Phone number" />
        </form>

        <form action="">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="enter home address" />
        </form>
        
      </div>

      <div className="newstaff_column">

        <form action="">
          <label htmlFor="">Name of Next Kin</label>
          <input type="text" placeholder="enter full name" />
        </form>

        <form action="">
          <label htmlFor="">Next of Kin Number</label>
          <input type="text" placeholder="enter phone number" />
        </form>
        
      </div>

      <button>Submit</button>

    </div>
  );
}

export default NewStaff;