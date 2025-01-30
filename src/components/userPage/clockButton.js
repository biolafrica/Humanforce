const defaultTime = new Date(0).toISOString();

const clockButton=(data)=>{
  
  if(data.break_start === defaultTime || null){
    return "Start Break"
  }else if(data.break_start !== defaultTime || null && data.break_end === defaultTime || null){
    return "End Break"
  }else if(data.break_end !== defaultTime || null && data.clock_out === defaultTime || null){
    return "End Work"
  }else{
    return "Work Completed"
  }


}

const clockButtonClass= data => data.clock_out === defaultTime || null ? "inactive-btn" : "filled-btn";



export  {clockButton, clockButtonClass};