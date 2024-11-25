import FormatTime from "./Time";

const Navbar =()=>{
  return(
    <nav className="nav_container">

      <div className="left_container">
        <img src="/icons/Group work.svg" alt="brand icon" />
      </div>

      <div className="right_container">
        <FormatTime/>
      </div>
     

    </nav>

  )
}

export default Navbar;