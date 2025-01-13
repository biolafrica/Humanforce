const AdminLogin = () =>{

   return(
    <div className="login_container">
      <h2>Team Sign In</h2>

      <form action="" >

        <label htmlFor="staff_code"><h4>Staff Code:</h4></label>
        <input 
          type="text" 
          placeholder="Enter your staff number"
          name="staff_code"
          required
        />
        <div className="error_message"></div>

        <button className="filled-btn" type="submit"><h4>Sign In</h4></button>

      </form>

    
    
    </div>
  )

}

export default AdminLogin;