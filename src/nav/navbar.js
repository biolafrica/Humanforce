import FormatTime from "../components/common/Time";
import { Link } from "react-router-dom";

const Navbar =()=>{
  return(
    <nav className="nav_container">

      <Link to="/" className="left_container">
        <img src="/icons/Group work.svg" alt="brand icon" />
      </Link>

      <div className="right_container">
        <FormatTime/>
      </div>
     

    </nav>

  )
}

export default Navbar;