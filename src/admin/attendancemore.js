const AttendanceMore = ()=>{
  return(
    <div className="attendancemore_cont">

      <h5>Abiodun Biobaku Attendance</h5>

      <div className="table_header">
        <h6 className="date_column">Date</h6>
        <h6 className="clockin_column">Clock in</h6>
        <h6 className="clockout_column">Clock out</h6>
        <h6 className="hours_column">Hours</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <div className="table_body">

        <div className="column">
          <h6 className="date_column">1-1-2024</h6>
          <h6 className="clockin_column">06:00:00</h6>
          <h6 className="clockout_column">14:00:01</h6>
          <h6 className="hours_column">7.5</h6>
          <h6 className="status_column">Early</h6>
        </div>

        <div className="column">
          <h6 className="date_column">2-1-2024</h6>
          <h6 className="clockin_column">06:00:00</h6>
          <h6 className="clockout_column">14:00:01</h6>
          <h6 className="hours_column">7.5</h6>
          <h6 className="status_column">Early</h6>
        </div>

        <div className="column">
          <h6 className="date_column">3-1-2024</h6>
          <h6 className="clockin_column">06:40:00</h6>
          <h6 className="clockout_column">14:00:00</h6>
          <h6 className="hours_column">7.0</h6>
          <h6 className="status_column">Late</h6>
        </div>

      </div>

      <div className="table_footer">
        <img src="/icons/Keyboard arrow left.svg" alt="" />
        <img src="/icons/Keyboard arrow right.svg" alt="" />
      </div>

    </div>
  )
};

export default AttendanceMore;