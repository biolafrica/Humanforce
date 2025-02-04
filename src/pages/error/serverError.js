import { Link } from "react-router-dom";

const ServerError = ()=>{
  return(
    <div className="error_path_cont">

      <img src="/icons/server.svg" alt="server-image icon" />
      <h3><b>500 - Server Error</b></h3>
      <h4>Something went wrong on our end, please try again later</h4>

      <div className="btn_container">
        <Link to="/" className="filled-btn"><h4>Try Again</h4></Link>
      </div>
      

      <h5>if you need further support you can <Link 
          to="mailto:info@eatup.ng" 
          className="clickable"
        >
          contact us
        </Link>
      </h5> 

    </div>

  )

}

export default ServerError;