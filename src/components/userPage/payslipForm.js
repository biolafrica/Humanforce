import PayslipTemplate from "./payslipTemplate";
import { useState , useRef} from "react";
import { generateYearMonthWeeks } from "../common/formatmtime";
import {AlertPopup, useAlert } from "../common/alert";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PayslipForm = ({payslips, staff})=>{
  const {currentYear, currentWeek, currentMonth} = generateYearMonthWeeks();

  const {alert, showAlert} = useAlert();

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedWeek, setSelectedWeek] = useState("");
  const [payslipData, setPayslipData] = useState(null);

  const payslipRef = useRef();

  const handleDownloadPayslip = async(e)=>{
    e.preventDefault();
    if(!selectedMonth || (staff.employment_type === "contract" && !selectedWeek)){
      showAlert("Please select all the required fields", "info");
      return;
    }

    let selectedPayslip;
    if(staff.employment_type === "contract"){
      selectedPayslip = payslips[selectedYear]?.[selectedMonth]?.find(p => p.week === selectedWeek);
    }else{
      selectedPayslip = payslips[selectedYear]?.[selectedMonth]?.[0]
    }

    if(!selectedPayslip){
      showAlert("payslip not found for the selected period", "error");
      return;
    }

    setPayslipData(selectedPayslip);

    await new Promise((resolve)=> setTimeout(resolve, 500));

    
    
    html2canvas(payslipRef.current, {scale: 3})
    .then((canvas)=>{
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`Payslip_${staff.firstname}_${staff.lastname}_${selectedMonth}_${selectedYear}.pdf`)
    })
    .catch((error)=>{
      console.error("Error generating PDF:", error);
      showAlert("Failed to generate PDF!", "error");
    })
      
  };

  return(
    <>
      <div >
        <div ref={payslipRef} style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
          <PayslipTemplate payslipData={payslipData || {}} staff={staff}/>
        </div>
      </div>
    
      <form onSubmit={handleDownloadPayslip} className="payslip_form"> 

        <h4 className="payslip_head">My Payslip</h4>

        <label htmlFor="Year"><h4>Year:</h4></label>
        <select
          id="Year"
          name="Year" 
          value={selectedYear}
          onChange={(e)=>setSelectedYear(e.target.value)}
          required 
        >
          {
            Object.keys(payslips)
            .map((year)=><option value={year} key={year}>{year}</option>)
          }
        
        </select>
      


        <label htmlFor="Payslip"><h4>Payslip:</h4></label>
        <select
          id="Payslip"
          name="Payslip" 
          value={selectedMonth}
          onChange={(e)=>setSelectedMonth(e.target.value)}
          required 
        >
          <option value="">Select Month</option>
          {staff.employment_type === "fixed" ?
            ((payslips[selectedYear] || [])
              .filter((month)=>{
                const optionMonth = new Date(month.createdAt).toLocaleString("default", {month: 'long'})
                return optionMonth !== currentMonth;
              })
              .map((filteredMonth)=>{
                const optionFilter = new Date(filteredMonth.createdAt).toLocaleString("default", {month: 'long'});
                return(<option value={optionFilter} key={optionFilter}>
                  {optionFilter} Payslip
                </option>)
              })
            ) :(Object.keys(payslips[selectedYear] || [])
              .map((month)=><option value={month} key={month}>{month}</option>)
            )
          }
         
        </select>
       


        {staff.employment_type === "contract" &&  (
          <>
            <label htmlFor="Weeks"><h4>Weeks:</h4></label>
            <select
              name="Weeks" 
              id="Weeks"
              value={selectedWeek}
              onChange={(e)=>setSelectedWeek(e.target.value)}
              required 
            >
              <option value="" >Select Week</option>
              {
                (payslips[selectedYear]?.[selectedMonth] || [])
                .filter((month)=>month.week !== currentWeek)
                .map((filteredWeek)=><option value={filteredWeek.week} key={filteredWeek.week}>{filteredWeek.week} Payslip</option>)
              }
            
            </select>
            
          </>
        )}

        <button type="submit" className="filled-btn"><h4>Download Payslip</h4></button>

      </form>

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

export default PayslipForm