import { Link } from "react-router-dom";

const PathError  = ({error})=>{
  return(
    <div className="error_path_cont">

      <img src="/icons/Unavailable.svg" alt="unavailable icon" />

      <h3><b>{error?.status || "404"} - Not found</b></h3>
      <h4>{error?.message || "Sorry, the page you are looking for cannot be found. Please try again"}</h4>

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


export default PathError;