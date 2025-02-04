const clockButton=(data)=>{
  
  if(!data.break_start){
    return "Start Break"
  }else if(data.break_start && !data.break_end){
    return "End Break"
  }else if(data.break_end  && !data.clock_out ){
    return "End Work"
  }else{
    return "Work Completed"
  }

}

const clockButtonClass= data => !data.clock_out ? "filled-btn" : "inactive-btn";


export  {clockButton, clockButtonClass};