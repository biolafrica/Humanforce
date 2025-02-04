import StaffForm from "../../components/adminPage/staffForm";

const NewStaff =()=>{

  const initialValues = {
    firstname: "",
    lastname: "",
    employment_type: "",
    salary: "",
    role: "",
    status: "",
    date_of_birth: "",
    email_address: "",
    phone_number: "",
    address: "",
    next_of_kin_name: "",
    next_of_kin_phone_number: "",
  }
  const url = "http://localhost:4000/admin/staff"


  return(
    <div className="newstaff_cont">

      <h5>Add Staff</h5>

      <StaffForm initialValues={initialValues} url={url} />
      
    </div>
  );

}

export default NewStaff;