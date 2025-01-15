import { useState } from "react";
import { useForm } from "../hooks/useForm";


const PayrollTable = ({weeks}) =>{
  console.log("payroll week", weeks)
  
  return(
    <div className="table_body">

      {weeks.map((week, index)=>{
        const deductions = week.loan + week.lateness_fine + week.tax + week.pension;
        const net_pay  = (week.basic_pay + week.bonuses) - deductions ;

        return(
          <div className="column" key={week._id}>
            <h6 className="date_column">Week {index + 1}</h6>
            <h6 className="clockin_column">&#8358;{(week.basic_pay).toFixed(2)}</h6>
            <h6 className="clockout_column">&#8358;{(deductions).toFixed(2)}</h6>
            <h6 className="hours_column">&#8358;{(week.bonuses).toFixed(2)}</h6>
            <h6 className="status_column">&#8358;{(net_pay).toFixed(2)}</h6>
          </div>
        )
      })}

      
      {/* Total Row */}
      <div className="column">
      
        <h6 className="date_column">Total</h6>
        <h6 className="clockin_column">&#8358;{ weeks.reduce((acc, week)=>acc + week.basic_pay, 0).toFixed(2)}</h6>
        <h6 className="clockout_column">&#8358;
          {
            weeks.reduce((acc, week)=>
            acc + (week.loan + week.lateness_fine + week.tax + week.pension), 0).toFixed(2)
          }
        </h6>
        <h6 className="hours_column">&#8358;{ weeks.reduce((acc, week)=>acc + week.bonuses, 0).toFixed(2)}</h6>
        <h6 className="status_column">&#8358;
          { 
            weeks.reduce((acc, week)=>{
              const deductions = week.loan + week.lateness_fine + week.tax + week.pension;
              const net_pay  = (week.basic_pay + week.bonuses) - deductions; 
              return acc + net_pay, 0
            })
            .toFixed(2)
          }
        </h6>
      </div>

    </div>
  );

};

const PayrollEditPopup = ({weeks, cancel}) =>{

  
  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [availableDays, setAvailableDays] = useState([]);
  const [initialValues, setInitialValues] = useState({
    rate: 0,
    unit: 0,
    loan: 0,
    bonuses: 0,

  })

  const {formData, handleInputChange, resetForm} = useForm(initialValues);

  const handleWeekChange = (e) => {
    const weekId = e.target.value;
    setSelectedWeek(weekId);

    if(weekId){
      const selectedWeekData = weeks.find((week)=>week._id === weekId);
      if(selectedWeekData){
        const daysArray = Object.entries(selectedWeekData.days)
        .filter(([_, details])=>details.isPresent)
        .map(([name, details])=>({name, ...details}));
        setAvailableDays(daysArray)
      }else{
        setAvailableDays([]);
      }
    }else{
      setAvailableDays([]);
    }

  }

  const handleDayChange = (e) =>{
    const dayName = e.target.value;
    setSelectedDay(dayName)

    if(dayName){
      const selectedDayDetails = availableDays.find((day)=> day.name === dayName);
      if(selectedDayDetails){
        setInitialValues({
          rate: selectedDayDetails.rate,
          unit: selectedDayDetails.unit,
          loan: selectedDayDetails.loan,
          bonuses: selectedDayDetails.bonuses
        });
      }
    }else{
      setInitialValues({
        rate: 0,
        unit: 0,
        loan: 0,
        bonuses: 0,
      })
    }
  };

  const handleSubmitForm = async(e) =>{
    e.preventDefault();
    try {
      //await axios.post(``, formData)
      //alert("Earning updated successfully"); 
      
    } catch (error) {
      console.error("Error updating earnings:", error);
    }

  }


  return(
    <>
      <div className="update_earnings">
        <div className="icon_cont">
          <img 
            src="/icons/close alert.svg" 
            alt="cancel-icon"
            style={{cursor: "pointer"}}
            onClick={()=>cancel()}
          />
        </div>
        
        <form action="" onSubmit={handleSubmitForm}>

          <div className="payroll_column">
            
            <div>
              <label htmlFor="week"><h4>Week</h4></label>
              <select 
                name="week" 
                value={selectedWeek} 
                onChange={handleWeekChange}
              >
                <option value="">Select Weeks</option>
                {weeks.map((week)=>(
                  <option 
                    value={week._id}
                    key={week._id}
                  >
                    {week.week}
                  </option>

                ))}
              </select>
              <div className="error_message"></div>
            </div>
         
            <div>
              <label htmlFor="day"><h4>Day</h4></label>
              <select 
                name="day" 
                value={selectedDay}
                onChange={handleDayChange}
                disabled={!selectedWeek}
              >
                <option value="">Select Days</option>
                {availableDays.map((day)=>( 
                  <option key={day.name} value={day.name}>
                    {day.name}
                  </option>
                ))}
              </select>
              <div className="error_message"></div>
            </div>
           
          </div>

          <div className="payroll_column">
            <div>
              <label htmlFor=""><h4>Rate</h4></label>
              <input 
                type="number" 
                name="rate" 
                value={initialValues.rate} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
        
          
            <div>
              <label htmlFor=""><h4>Unit</h4></label>
              <input 
                type="number" 
                name="unit" 
                value={initialValues.unit} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
          
          </div>


          <div className="payroll_column">

            <div>
              <label htmlFor=""><h4>Loan</h4></label>
              <input 
                type="number" 
                name="loan" 
                value={initialValues.loan} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
        
          
            <div>
              <label htmlFor=""><h4>Bonuses</h4></label>
              <input 
                type="number" 
                name="bonuses" 
                value={initialValues.bonuses} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
           
          </div>


          <button className="filled-btn" type="submit"><h4>Update</h4></button>

        </form>
      </div>

      <div></div>
    </>
  
  )
  
}

export {
  PayrollTable,
  PayrollEditPopup,
}