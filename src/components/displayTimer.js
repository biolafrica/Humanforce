import Timer from "../functions/timer";
import { breakTimeDifference, timeDifference } from "./formatmtime";
const defaultTime = new Date(0).toISOString();

const DisplayTimer = ({time})=>{

  if(
    time.clock_in !== defaultTime &&
    time.break_start === defaultTime && 
    time.break_end === defaultTime && 
    time.clock_out === defaultTime
  )
  {
    let difference = timeDifference(time.clock_in, new Date());
    return(
      <Timer
        initialHours = {difference.hours}
        initialMinute = {difference.minutes}
        initialSeconds = {difference.seconds}
        isPaused = {false}
        isRunning = {true}
      />
    )
    
  }
  else if (
    time.clock_in !== defaultTime && 
    time.break_start !== defaultTime && 
    time.break_end == defaultTime && 
    time.clock_out === defaultTime 
  )
  {
    let difference = timeDifference(time.clock_in, time.break_start);
    return(
      <Timer
        initialHours = {difference.hours}
        initialMinute = {difference.minutes}
        initialSeconds = {difference.seconds}
        isPaused = {true}
        isRunning = {false}
      />
    )

  }
  else if(
    time.clock_in !== defaultTime && 
    time.break_start !== defaultTime && 
    time.break_end !== defaultTime && 
    time.clock_out === defaultTime
  )
  {
    
    let difference = breakTimeDifference(
      time.clock_in,
      new Date(),
      time.break_start, 
      time.break_end
    )
  
    return(
      <Timer
        initialHours = {difference.hours}
        initialMinute = {difference.minutes}
        initialSeconds = {difference.seconds}
        isRunning = {true}
        isPaused = {false}
       
        
      />
      
    )

  }
  else if(
    time.clock_in !== defaultTime && 
    time.break_start !== defaultTime && 
    time.break_end !== defaultTime && 
    time.clock_out !== defaultTime
  )
  {
    let difference = timeDifference(time.clock_in, time.clock_out);
    return(
      <Timer
        initialHours = {difference.hours}
        initialMinute = {difference.minutes}
        initialSeconds = {difference.seconds}
        isPaused = {true}
        isRunning = {false}
      />
    )
  }else{
    let difference = timeDifference(time.clock_in, time.clock_out);
    return(
      <Timer
        initialHours = {difference.hours}
        initialMinute = {difference.minutes}
        initialSeconds = {difference.seconds}
        isPaused = {true}
        isRunning = {false}
      />
    )
  }
  
}


export default DisplayTimer;