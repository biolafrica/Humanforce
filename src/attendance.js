const Attendance = ()=>{

  return(
    <div className="attendance_cont">

      <div className="table_container">

        <div className="table_heading">

          <form action="" className="month_form">
            <input type="month" />
          </form>

        </div>

        <div className="table_header">
          <h4 className="date_column">Date</h4>
          <h4 className="clockin_column">Clock in</h4>
          <h4 className="clockout_column">Clock out</h4>
          <h4 className="hours_column">Hours</h4>
          <h4 className="status_column">Status</h4>
        </div>

        <div className="table_body">

          <div className="column">
            <h4 className="date_column">01-12</h4>
            <h4 className="clockin_column">06:00:00</h4>
            <h4 className="clockout_column">14:00:01</h4>
            <h4 className="hours_column">7.5</h4>
            <h4 className="status_column">Early</h4>
          </div>

          <div className="column">
            <h4 className="date_column">01-12</h4>
            <h4 className="clockin_column">06:00:00</h4>
            <h4 className="clockout_column">14:00:01</h4>
            <h4 className="hours_column">7.5</h4>
            <h4 className="status_column">Early</h4>
          </div>

          <div className="column">
            <h4 className="date_column">01-12</h4>
            <h4 className="clockin_column">06:00:00</h4>
            <h4 className="clockout_column">14:00:01</h4>
            <h4 className="hours_column">7.5</h4>
            <h4 className="status_column">Early</h4>
          </div>
        
        </div>

        <div className="table_footer">
          <img src="icons/Keyboard arrow left.svg" alt="" />
          <img src="icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>
      

    </div>
  )

}

export default Attendance;