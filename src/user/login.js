const Login = ()=>{

  return(
    <div className="login_container">
      <h2>Sign In</h2>

      <label htmlFor=""><h4>Staff Number:</h4></label>
      <input type="text" placeholder="Enter your staff number"/>
      <div className="error_message"></div>

      <button className="filled-btn"><h4>Sign In</h4></button>
      
    </div>
  )

}


export default Login