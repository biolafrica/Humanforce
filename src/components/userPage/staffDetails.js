
const StaffDetails = (props)=>(

  <div className="staff_details">

    <div className="staff_name">
      <img src="/icons/Person.svg" alt="" />
      <h4>{props.staff.firstname} {props.staff.lastname}</h4>
    </div>

    <div className="staff_position">
      <img src="/icons/Work.svg" alt="" />
      <h4>{props.staff.position}</h4>
    </div>

    <div className="staff_company">
      <img src="/icons/Local convenience store.svg" alt="" />
      <h4>Eatup Food Services</h4>
    </div>

  </div>

)


export default StaffDetails;