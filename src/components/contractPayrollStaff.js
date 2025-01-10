import { useState } from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";

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

const PayrollEditPopup = ({weeks}) =>{
  const initialValues = {
    rate: 0,
    unit: 0,
    loan: 0,
    bonuses: 0,
  }
  const {formData, handleInputChange, resetForm} = useForm(initialValues);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleWeekChange = (e) => setSelectedWeek(e.target.value)
  const handleDayChange = (e) => setSelectedDay(e.target.value)

  const handleSubmitForm = async(e) =>{
    e.preventDefault();
    try {
      //await axios.post(``, formData)
      //alert("Earning updated successfully"); 
      
    } catch (error) {
      console.error("Error updating earnings:", error);
    }

  }

  const availableDays = selectedWeek
  ? weeks.find((week)=>week._id === selectedWeek)?.days
  : [];

  return(
    <div className="update_earnings">

      <form action="" onSubmit={handleSubmitForm}>

        <label htmlFor="week"><h4>Week</h4></label>
        <select 
          name="week" 
          value={selectedWeek} 
          onChange={handleWeekChange}
        >
          {weeks.map((week)=>(
            <option 
              value={week._id}
              key={week._id}
            >
              Week {week.week}
            </option>

          ))}
        </select>
        <div className="error_message"></div>

        <label htmlFor="day"><h4>Day</h4></label>
        <select 
          name="day" 
          value={selectedDay}
          onChange={handleDayChange}
        >
          {availableDays.map((day)=>(
            day.isPresent && 
            <option key={day.name} value={day.name}>
              {day.name}
            </option>
          ))}

        </select>
        <div className="error_message"></div>

        {["rate", "unit", "loan", "bonuses"].map((field)=>(
          <div key={field}>
            <label htmlFor=""><h4>{field.charAt(0).toUpperCase() + field.slice(1)}</h4></label>
            <input type="number" name="field" value={formData[field]} onChange={handleInputChange} />
            <div className="error_message"></div>
          </div>

        ))}

        <button className="filled-btn" type="submit"><h4>Update</h4></button>

      </form>
      
    </div>
  )
  
}

const PayrollHeader = ({setWeeks, setIsEditVisible, payrollData, isEditVisible})=>{

  const currentMonth = new Date().toLocaleString("default", {
    month: 'long', 
    year: "numeric"
  });

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const handleMonthChange = (e)=>{
    const month = e.target.value;
    setSelectedMonth(month)
    setWeeks((payrollData)[month] || [])
    month === currentMonth ? setIsEditVisible(true) : setIsEditVisible(false);
    
  }

  return(

    <div className="contract_staff_date_filter">

      <div className="staff_filter_container ">

        <select 
          name="month"
          value={selectedMonth}
          onChange={handleMonthChange} 
        >
          {Object.keys(payrollData).map((month)=>(
            <option 
              value={month}
              key={month}
            >
              {month}
            </option>

          ))}
          
        </select>

      </div>

      {isEditVisible && 
      <img src="/icons/Edit.svg" alt="Edit" onClick={()=>setIsEditVisible(false)} />}

    </div>

  )

}

export {
  PayrollTable,
  PayrollEditPopup,
  PayrollHeader
}