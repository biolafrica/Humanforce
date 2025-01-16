import Pagination from "../pagination";
import usePagination from "../../hooks/usePagination";
import { Link } from "react-router-dom";


const PayrollStaffList = ({staff, user})=>{

  const {
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage } = usePagination(user, 10)

  return(
    <>
      <div className="table_body fixed_staff_table">
        {currentData.map((user)=>{
          const type = user.employment_type === "fixed" ? "fixed" : "contract";
          
          return(
            <Link to={`/admin/payroll/edit/${type}/${user._id}`} className="column" key={user._id}>
              <h6 className="date_column">{user.firstname} {user.lastname}</h6>
              <h6 className="clockin_column">{user.role}</h6>
              <h6 className="clockout_column">{user.email_address}</h6>
              <h6 className="hours_column">&#8358;{user.salary}</h6>
              <h6 className="status_column">{user.status}</h6>
            </Link>
          )

        })}
      
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage} 
        goToPreviousPage={goToPreviousPage}
      />
    </>
  )

}

export default PayrollStaffList;