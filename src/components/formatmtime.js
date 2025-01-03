const formatMTime=(time)=>{
  const date = new Date(time); 

  const hours = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${hours} : ${minute}`
}

const timeDifference=(startTime, endTime)=>{
  
  const start = new Date(startTime);
  const end = new Date(endTime);

  const diffInSeconds = Math.floor((end - start)/ 1000);

  const hours = Math.floor(diffInSeconds/ 3600);

  const minutes = Math.floor((diffInSeconds % 3600) / 60);

  const seconds = diffInSeconds % 60;

  return {hours, minutes, seconds}
}

const breakTimeDifference=(startTime,endTime,breakStart,breakEnd)=>{

  const[start,end,break_start,break_end]= [
    new Date(startTime),
    new Date(endTime),
    new Date(breakStart),
    new Date(breakEnd)
  ];
  const timeDiffInSeconds = Math.floor((end - start)/ 1000);
  const breakDiffInSeconds = Math.floor((break_end - break_start)/ 1000);
  const diffInSeconds = timeDiffInSeconds - breakDiffInSeconds;

  const hours = Math.floor(diffInSeconds/ 3600);

  const minutes = Math.floor((diffInSeconds % 3600) / 60);

  const seconds = diffInSeconds % 60;

  return {hours, minutes, seconds}



}

export {
  formatMTime,
  timeDifference,
  breakTimeDifference
}