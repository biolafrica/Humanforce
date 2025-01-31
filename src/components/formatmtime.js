const formatMTime=(time)=>{
  const date = new Date(time); 

  const hours = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${hours} : ${minute}`
}

const formattedFullTime = (timeStamp)=>{

  const date = new Date(timeStamp); 

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minute = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");

  return `${hours} : ${minute} : ${seconds}`

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

const formattedDate=(timeStamp)=>{

  const dateObject = new Date(timeStamp);

  const day= String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = dateObject.getFullYear();

  return(`${day} - ${month} - ${year}`);


}

const generateYearMonthWeeks =()=>{
  const currentYear = new Date().getFullYear().toString();

  const currentMonth = new Date().toLocaleString("default", {month: 'long'});

  const date = new Date();
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = (date - start +(start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) / 86400000;
  const week = `${date.getFullYear()}-W${Math.ceil((diff + start.getDay() + 1) / 7)}`;
  
  return{currentMonth, currentYear, week};

}

export {
  formatMTime,
  timeDifference,
  breakTimeDifference,
  formattedDate,
  formattedFullTime,
  generateYearMonthWeeks
}