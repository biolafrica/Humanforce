import Pagination from "../common/pagination";
import usePagination from "../../hooks/usePagination";
import { Link } from "react-router-dom";
import Empty from "../common/empty";
import formatNaira from "../../utils/formatNaira";

const StaffList = ({users})=>{

  const {
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage

  } = usePagination(users, 10)

  return(

    <>

      <div className="table_body">
        { currentData.length === 0 
          ? (<Empty/>) 
          :(
            currentData.map((user)=>(

              <Link to={`/admin/staff/${user._id}`} className="column" key={user._id}>
                <h6 className="date_column">{user.firstname} {user.lastname}</h6>
                <h6 className="clockin_column">{user.role}</h6>
                <h6 className="clockout_column">{user.employment_type}</h6>
                <h6 className="hours_column">{formatNaira(user.salary)}</h6>
                <h6 className="status_column">{user.status}</h6>
              </Link>

            ))
          )
        }

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

export default StaffList;