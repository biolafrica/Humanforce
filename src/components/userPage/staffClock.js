import {formatMTime} from "../common/formatmtime"

const StaffClock = ({clock})=>{
  
  const [clock_in, break_start, break_end, clock_out] = [
    formatMTime(clock.clock_in),
    formatMTime(clock.break_start), 
    formatMTime(clock.break_end), 
    formatMTime(clock.clock_out)
  ]
 
  const display =(time)=>time === "01 : 00" ? "none" : "";

  return(

    <div className="staff_clock_summary">

      <div className={`clock_in ${display(clock_in)}`}>
        <div className="clock_in_cont">
          <h4 className="clock_type">Clocked in: </h4>
          <h4><b>{clock_in}</b></h4>
        </div>
      </div>

      <div className={`break_start ${display(break_start)} `}>
        <div className="clock_in_cont">
          <h4 className="clock_type">Break started: </h4>
          <h4><b>{break_start}</b></h4>
        </div>
      </div>

      <div className={`break_end ${display(break_end)}`}>
        <div className="clock_in_cont">
          <h4 className="clock_type">Break ended: </h4>
          <h4><b>{break_end}</b></h4>
        </div>
      </div>

      <div className={`clock_out ${display(clock_out)}`}>
        <div className="clock_in_cont">
          <h4 className="clock_type">Clocked out: </h4>
          <h4><b>{clock_out}</b></h4>
        </div>
      </div>

    </div>

  )
}


export default StaffClock