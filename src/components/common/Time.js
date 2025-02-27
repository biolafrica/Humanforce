const FormatTime=()=>{

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let currentDate = new Date();
  const dayName = days[currentDate.getDay()]; 
  const monthName = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const ampm = hours >=12 ? "PM" : "AM";
  hours = hours % 12 || 12;

 return(
  <h4> <span style={{marginRight : "5px"}}>{dayName} {day} {monthName}</span>  <span>{hours.toString().padStart(2, "0")}:{minutes} {ampm}</span> </h4>
  );
}
export default FormatTime;