import { Link } from "react-router-dom";

const AttendancesList = (props)=>{

  console.log("attendance props", props.data);
  const attendances = props.data.attendances.attendances;
  const users = props.data.users.users;
  console.log("attendance",attendances); 
  console.log("users",users); 
  return(
      
    <div className="table_body">

      {users.map((user)=>{

        const userAttendance = attendances.filter(
          (attendance) => attendance.staff_code === user.staff_code
        );

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
              to={`/admin/attendance/more/${user._id}`} 
              className="column" 
              key={user._id}
            >
            <h6 className="date_column">{user.firstname} {user.lastname}</h6>
            <h6 className="clockin_column">{user.role}</h6>
            <h6 className="clockout_column">{totalHours || 0}</h6>
            <h6 className="hours_column">{totalFine || 0}</h6>
            <h6 className="status_column">{percentageEarly}%</h6>
          </Link>
        )

      })}

     

    </div>
  )

}


export default AttendancesList