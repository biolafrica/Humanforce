import { useState } from "react";

const WorkingHours = ()=>{
  const [workingHours, setWorkingHours] = useState({
    Sunday: { open:"", close:"", isClosed: false},
    Monday: { open:"", close:"", isClosed: false},
    Tuesday: { open:"", close:"", isClosed: false},
    Wednesday: { open:"", close:"", isClosed: false},
    Thursday: { open:"", close:"", isClosed: false},
    Friday: { open:"", close:"", isClosed: false},
    Saturday: { open:"", close:"", isClosed: false},

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
  }

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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