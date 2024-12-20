const clockButton=(data)=>{

  if(data.break_start === 0){
    return "Start Break"
  }else if(data.break_start !== 0 && data.break_end === 0){
    return "End Break"
  }else if(data.break_end !==0 && data.clock_out === 0 ){
    return "End Work"
  }else{
    return "Work Completed"
  }


}

const clockButtonClass= data => (data.clock_out !== 0 ? "inactive-btn" : "filled-btn");



export  {clockButton, clockButtonClass};