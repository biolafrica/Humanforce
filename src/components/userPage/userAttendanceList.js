import { formattedDate, formattedFullTime } from "../formatmtime";
import usePagination from "../../hooks/usePagination"
import Empty from "../empty";

import Pagination from "../pagination"

const UserAttendancelist = ({attendance}) =>{
  const{
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage 
  } = usePagination(attendance, 25)
 
  
  return(
    <>
      <div className="table_body my_table">
        {
          currentData.length === 0 ? (<Empty/>): 

          (currentData.map((attendance)=>{

            const date = formattedDate(attendance.createdAt);
            const clockIn = formattedFullTime(attendance.clock_in);
            const clockOut = formattedFullTime(attendance.clock_out);

            return(
              <div className="column">
                <h6 className="date_column">{date}</h6>
                <h6 className="clockin_column"> <b className="small">Clock in: </b>{clockIn}</h6>
                <h6 className="clockout_column"><b className="small" >Clock out: </b> {clockOut}</h6>
                <h6 className="hours_column">{attendance.hours}<span className="small" >hours</span></h6>
                <h6 className={`status_column ${attendance.status === "early" ? "early" : "late"}`}>{attendance.status}</h6>
              </div>
            )

          }))

        }

        
        
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

export default UserAttendancelist;