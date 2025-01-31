import { formattedDate, formattedFullTime } from "../formatmtime";
import usePagination from "../../hooks/usePagination"
import Empty from "../empty";
import { Link } from "react-router-dom";

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

            const [date, clockIn, clockOut] = [
              formattedDate(attendance.createdAt),
              formattedFullTime(attendance.clock_in), 
              formattedFullTime(attendance.clock_out)
            ]

            return(
              <Link to={`/clock/${attendance._id}`} className="column" Key={attendance._id}>
                <h6 className="date_column">{date}</h6>
                <h6 className="clockin_column"> <b className="small">Clock in: </b>{clockIn}</h6>
                <h6 className="clockout_column"><b className="small" >Clock out: </b>{clockOut}</h6>
                <h6 className="hours_column">{attendance.hours}<span className="small" >hours</span></h6>
                <h6 className={`status_column ${attendance.status === "early" ? "early" : "late"}`}>{attendance.status}</h6>
              </Link>
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