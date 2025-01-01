import { useState } from "react";
import axios from "axios";

const WorkingHours = (props)=>{
  const data = props.data.workingHours;
  const hour = data[0].days;
  
  const [sun,mon,tue,wed,thur,fri,sat] = [
    hour.sunday,
    hour.monday,
    hour.tuesday,
    hour.wednesday,
    hour.thursday,
    hour.friday,
    hour.saturday
  ]


  const [workingHours, setWorkingHours] = useState({
    sunday: { 
      open:sun.open,
      close:sun.close, 
      isClosed: sun.isClosed
    },
    monday: { 
      open:mon.open, 
      close:mon.close, 
      isClosed: mon.isClosed
    },
    tuesday: { 
      open:tue.open, 
      close:tue.close, 
      isClosed: tue.isClosed
    },
    wednesday: { 
      open:wed.open, 
      close:wed.close, 
      isClosed: wed.isClosed
    },
    thursday: { 
      open:thur.open, 
      close:thur.close, 
      isClosed: thur.isClosed
    },
    friday: { 
      open:fri.open, 
      close:fri.close, 
      isClosed: fri.isClosed
    },
    saturday: { 
      open:sat.open, 
      close:sat.close, 
      isClosed: sat.isClosed
    },

  });


  const handleCheckboxChange = (day) =>{
    setWorkingHours((prevState)=> ({
      ...prevState,
      [day]: {...prevState[day], isClosed: !prevState[day].isClosed},

    }));
  }

  const handleTimeChange = (day, field, value)=>{
    setWorkingHours((prevState)=>({
      ...prevState,
      [day]:{...prevState[day], [field]:value},

    }));

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(workingHours);

    const payload = {days : workingHours}
    try {
      const response = await axios.post("http://localhost:4000/admin/working-hours", payload);

      console.log(response.data);
      alert("working hours saved successfully!");

      
    } catch (error) {
      console.log("Error saving working hours", error);
      alert("Error saving working hours")
      
    }
  }

  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  return(
    <form action="" onSubmit={handleSubmit}>

      <div className="working_hours_colums">

        {weekDays.map((day)=>(

          <div className="working_hours_column" key={day}>

            <div className="days">
              <h4 className="week_day">{day}</h4>
              <div className="checkbox_cont">
                <input
                  type="checkbox" 
                  name="" 
                  onChange={()=>handleCheckboxChange(day)}
                  checked={workingHours[day].isClosed}
                />
                <h5>Close</h5>
              </div>
            </div>

            {!workingHours[day].isClosed && (
              <div className="work_hours">
                <div>
                  <label htmlFor=""><h4>Open:</h4></label>
                  <input 
                    type="time" 
                    value={workingHours[day].open}
                    onChange={(e) => handleTimeChange(day, "open", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor=""><h4>Close:</h4></label>
                  <input 
                    type="time"
                    value={workingHours[day].close}
                    onChange={(e) => handleTimeChange(day, "close", e.target.value)} 
                  />
                </div>
              </div>

            )}
            
          </div>

        ))}

        <button className="filled-btn" type="submit"><h4>Submit</h4></button>

      </div>

    </form>
  )


}


export default WorkingHours;