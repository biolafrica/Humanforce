import { Link } from "react-router-dom";
import Pagination from "../common/pagination";
import usePagination from "../../hooks/usePagination"
import formatNaira from "../../utils/formatNaira";
import Empty from "../common/empty";

const AttendancesList = ({attendances, users})=>{
  const{
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage 
  } = usePagination(users, 10)
  
  return(
    <>
      <div className="table_body my_table">

        {attendances.length === 0 ? (<Empty/>):
          (currentData.map((user)=>{

            const userAttendance = attendances.filter(
              (attendance) => attendance.staff_code === user.staff_code
            );

            const monthYear = new Date(attendances[0].createdAt).toLocaleString('default',{month: 'long', year:'numeric'});

            const totalHours = userAttendance.reduce(
              (acc, curr) => acc + curr.hours,
              0
            );

            const totalFine = userAttendance.reduce(
              (acc, curr) => acc + curr.late_fine,
              0

            );

            const totalStatusCount = userAttendance.length;
            const earlyCount = userAttendance.filter(
              (att) => att.status === "early"
            ).length

            const percentageEarly =
              totalStatusCount > 0
              ? Math.floor((earlyCount/totalStatusCount) * 100)
              : 0;

            
            return(
              <Link 
                  to={`/admin/attendance/more/${user._id}?monthYear=${encodeURIComponent(monthYear)}`} 
                  className="column" 
                  key={user._id}
                >
                <h6 className="date_column">{user.firstname} {user.lastname}</h6>
                <h6 className="clockin_column">{user.role}</h6>
                <h6 className="clockout_column">{totalHours || 0}</h6>
                <h6 className="hours_column">{formatNaira(totalFine) || 0}</h6>
                <h6 className={`status_column ${percentageEarly <= 50 ? "late" : "early"}`}>{percentageEarly}%</h6>
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


export default AttendancesList