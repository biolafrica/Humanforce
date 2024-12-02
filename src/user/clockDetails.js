const ClockDetails =()=>{

  return(
    <div className="clock_container">

      <div className="timer_container">
        <h3><b>09:00:53</b></h3>
      </div>

      <div className="clockstatus_container">

        <div className="staff_details">

          <div className="staff_name">
            <img src="/icons/Person.svg" alt="" />
            <h4>Abiodun Biobaku</h4>
          </div>

          <div className="staff_position">
            <img src="/icons/Work.svg" alt="" />
            <h4>Operations manager</h4>
          </div>

          <div className="staff_company">
            <img src="/icons/Local convenience store.svg" alt="" />
            <h4>Eatup Food Services</h4>
          </div>

        </div>

        <div className="staff_clock_summary">

          <div className="clock_in">
            <h4><b>06:00</b></h4>

            <div className="clock_in_cont">

              <div className="check_arrow">
                <img src="/icons/Check circle outline.svg" alt="" />
                <div className="arrow"></div>
              </div> 

              <h4>Clock in</h4>

            </div>

          </div>

          <div className="break_start">
            <h4><b>10:00</b></h4>

            <div className="clock_in_cont">
              <div className="check_arrow">
                <img src="icons/Circle.svg" alt="" />
                <div className="arrow"></div>
              </div> 
              <h4>Break started</h4>
            </div>

          </div>

          <div className="break_end">
            <h4><b>10:30</b></h4>
            
            <div className="clock_in_cont">
              
              <div className="check_arrow">
                <img src="icons/fill Circle.svg" alt="" />
                <div className="arrow"></div>
              </div> 
              <h4>Break ended</h4>

            </div>
          </div>

          <div className="clock_out">
            <h4><b>02:00</b></h4>
            <div className="clock_in_cont">
              <img src="icons/Check circle.svg" alt="" />
              <h4>Clock out</h4>
            </div>
          </div>

        </div>

      </div>

      <button className="filled-btn"><h4>Start Break</h4></button>

    </div>
  )
  

}

export default ClockDetails