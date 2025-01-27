const defaultTime = new Date(0).toISOString();

const clockButton=(data)=>{
  console.log(data.break_start); 
  
  if(data.break_start === defaultTime){
    return "Start Break"
  }else if(data.break_start !== defaultTime && data.break_end === defaultTime){
    return "End Break"
  }else if(data.break_end !== defaultTime && data.clock_out === defaultTime){
    return "End Work"
  }else{
    return "Work Completed"
  }


}

const clockButtonClass= data => data.clock_out !== defaultTime ? "inactive-btn" : "filled-btn";



export  {clockButton, clockButtonClass};