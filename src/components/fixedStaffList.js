import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const FixedStaffList = (props)=>{
  const payrolls = props.data;
  const users = props.user;

  return(

    <div className="table_body fixed_staff_table">
      {users.map((user)=>(
        <Link to={`/admin/payroll/edit/fixed/${user._id}`} className="column" key={user._id}>
          <h6 className="date_column">{user.firstname} {user.lastname}</h6>
          <h6 className="clockin_column">{user.role}</h6>
          <h6 className="clockout_column">{user.email_address}</h6>
          <h6 className="hours_column">&#8358;{user.salary}</h6>
          <h6 className="status_column">{user.status}</h6>
        </Link>

      ))}
    
    </div>

  )

  
}

export default FixedStaffList;