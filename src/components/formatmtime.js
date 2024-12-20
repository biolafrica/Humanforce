const formatMTime=(time)=>{
  const date = new Date(time); 

  const hours = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${hours} : ${minute}`
}

export default formatMTime;