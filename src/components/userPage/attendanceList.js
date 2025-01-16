import { formattedDate, formattedFullTime } from "../formatmtime";
import Pagination from "../pagination"
import usePagination from "../../hooks/usePagination"

const AttendanceList = ({attendances})=>{

  const {
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage 
  } = usePagination(attendances,10)

  return(
    <>
      <div className="table_body">
        {currentData.map((attendance)=>{
          const date = formattedDate(attendance.createdAt);
          const clockIn = formattedFullTime(attendance.clock_in);
          const clockOut = formattedFullTime(attendance.clock_out);

          return(
            <div className="column" key={attendance._id}>
              <h6 className="date_column">{date}</h6>
              <h6 className="clockin_column">{clockIn}</h6>
              <h6 className="clockout_column">{clockOut}</h6>
              <h6 className="hours_column">{attendance.hours || "Pending"}</h6>
              <h6 className="status_column">{attendance.status || "Late" }</h6>
            </div>
          )
        

        })}
      
      </div>

      <Pagination
        currentPage = {currentPage} 
        totalPages = {totalPages} 
        goToNextPage ={goToNextPage} 
        goToPreviousPage ={goToPreviousPage}
      />


    
    </>
   

  )

}

export default AttendanceList;