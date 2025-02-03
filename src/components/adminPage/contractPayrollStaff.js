import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { AlertPopup, useAlert } from "../alert";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import formatNaira from "../../utils/formatNaira";
import Empty from "../empty";


const PayrollTable = ({weeks}) =>{
  
  return(
    <div className="table_body my_table">

      {weeks.length === 0 ? (<Empty/>):
        (weeks.map((week, index)=>{
          const deductions = week.loan + week.lateness_fine + week.tax + week.pension;
          const net_pay  = (week.basic_pay + week.bonuses) - deductions ;

          return(
            <div className="column" key={week._id}>
              <h6 className="date_column">Week {index + 1}</h6>
              <h6 className="clockin_column">{formatNaira(week.basic_pay)}</h6>
              <h6 className="clockout_column">{formatNaira(deductions)}</h6>
              <h6 className="hours_column">{formatNaira(week.bonuses)}</h6>
              <h6 className="status_column">{formatNaira(net_pay)}</h6>
            </div>
          )
        }))
      }

      
      {/* Total Row */}
      { weeks.length === 0 ? (<Empty/>):
        (<div className="column">
        
          <h6 className="date_column">Total</h6>
          <h6 className="clockin_column">{formatNaira(weeks.reduce((acc, week)=>acc + week.basic_pay, 0).toFixed(2))}</h6>
          <h6 className="clockout_column">
            {
              formatNaira(weeks.reduce((acc, week)=>
              acc + (week.loan + week.lateness_fine + week.tax + week.pension), 0).toFixed(2))
            }
          </h6>
          <h6 className="hours_column">{formatNaira(weeks.reduce((acc, week)=>acc + week.bonuses, 0).toFixed(2))}</h6>
          <h6 className="status_column">
            { 
              formatNaira(weeks.reduce((acc, week)=>{
                const deductions = week.loan + week.lateness_fine + week.tax + week.pension;
                const net_pay  = (week.basic_pay + week.bonuses) - deductions; 
                return acc + net_pay;
              }, 0)
              .toFixed(2))
            }
          </h6>
        </div>)
      }
    </div>
  );

};

const PayrollEditPopup = ({weeks, cancel}) =>{
  const navigate = useNavigate();
  const {alert, showAlert} = useAlert();
  const {id} = useParams();
  const token = localStorage.getItem("adminAuthToken")
  
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

        resetForm({
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

      resetForm({
        rate: 0,
        unit: 0,
        loan: 0,
        bonuses: 0,
      })
    }
    
  };

  const handleSubmitForm = async(e) =>{
    e.preventDefault();

    const finalData = {
      ...formData,
      weekId : selectedWeek,
      day : selectedDay
    }

    try {
      const response = await axios.post(`http://localhost:4000/admin/payroll/${id}`, finalData, {
        headers:{
          Authorization : `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      showAlert("Updated successfully", "success"); 
      
    } catch (error) {
      console.error("Error submitting form:", error);
      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Unsuccessful, try again", "error");
      }
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
              <label htmlFor="rate"><h4>Rate</h4></label>
              <input 
                type="number" 
                name="rate" 
                value={formData.rate} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
        
          
            <div>
              <label htmlFor="unit"><h4>Unit</h4></label>
              <input 
                type="number" 
                name="unit" 
                value={formData.unit} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
          
          </div>

          <div className="payroll_column">

            <div>
              <label htmlFor="loan"><h4>Loan</h4></label>
              <input 
                type="number" 
                name="loan" 
                value={formData.loan} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
              />
              <div className="error_message"></div>
            </div>
        
          
            <div>
              <label htmlFor="bonuses"><h4>Bonuses</h4></label>
              <input 
                type="number" 
                name="bonuses" 
                value={formData.bonuses} 
                onChange={handleInputChange}
                disabled={!selectedDay} 
                
              />
              <div className="error_message"></div>
            </div>
           
          </div>

          <button className="filled-btn" type="submit"><h4>Update</h4></button>

        </form>

      </div>

      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}

    </>
  
  )
  
}

export {
  PayrollTable,
  PayrollEditPopup,
}