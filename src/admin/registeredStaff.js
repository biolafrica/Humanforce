import StaffForm from "../components/staffForm";
import { useParams } from "react-router-dom";
import UserFetch from "../hooks/userFetch";

const RegisteredStaff = ()=>{
  const {id} = useParams();
  const token = localStorage.getItem("adminAuthToken");
  const url = `http://localhost:4000/admin/staff/${id}`;

  const {data, isLoading, errorMessage} = UserFetch(url,token);


  if(isLoading) return(<div>....Loading</div>)
  if(errorMessage) return({errorMessage})
  if(data){
    const staff = data.staff;
    const dateObject = new Date(staff.date_of_birth);
    const[day,month,year] = [
      String(dateObject.getDate()).padStart(2, "0"),
      String(dateObject.getMonth() + 1).padStart(2, "0"),
      dateObject.getFullYear() 
    ];
    const formattedDate = `${year}-${month}-${day}`;
   

    const initialValues = {
      firstname: staff.firstname,
      lastname: staff.lastname,
      employment_type: staff.employment_type,
      salary: staff.salary,
      role: staff.role,
      status: staff.status,
      date_of_birth: formattedDate,
      email_address: staff.email_address,
      phone_number: staff.phone_number,
      address: staff.address,
      next_of_kin_name: staff.next_of_kin_name,
      next_of_kin_phone_number: staff.next_of_kin_phone_number,
    }

    return(

      <div className="newstaff_cont">

        <h5>{staff.firstname} {staff.lastname} Details</h5>

        <StaffForm initialValues={initialValues} url={url} />
        
      </div>

    )
  }

 

  
 

}

export default RegisteredStaff