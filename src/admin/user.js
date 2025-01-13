const DashboardUser =()=>{
  const storedUser = localStorage.getItem('team');
  const user = JSON.parse(storedUser);

  return(

    <div className="personal_body">

      <h4>Personal Settings</h4>

        <div className="payment_columns">

          <div className="payment_column">

            <div>
              <label htmlFor=""><h4>First Name</h4></label>
              <input 
                type="text" 
                placeholder="enter full name" 
                value={user.firstname}
                readOnly
              />
            </div>

            <div>
              <label htmlFor=""><h4>Last Name</h4></label>
              <input
                type="text" 
                placeholder="enter name"
                value={user.lastname} 
                readOnly
              />
            </div>
            
          </div>

          <div className="payment_column">

            <div>
              <label htmlFor=""><h4>Email Address</h4></label>
              <input 
                type="email"  
                placeholder="enter email"
                value={user.email} 
                readOnly
              />
            </div>

            <div>
              <label htmlFor=""><h4>Role</h4></label>
              <input 
                type="text" 
                placeholder="enter role"
                value={user.role}
                readOnly 
              />
            </div>
            
          </div>


        </div>

    </div>
  )

}

export default DashboardUser;