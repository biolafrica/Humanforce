const Businessetting =()=>{
  return(
    <div className="businesseting_cont">

      <div className="businessettings_head">
        <div className="staff_cont_head">
          <h5 className="total select">Business</h5>
          <h5 className="contract">Personal</h5>
          <h5 className="fixed">Password</h5>
        </div>
      </div>

      <div className="settings_cont">

        <div className="businessettings_body">

          <div className="bio_data">
            <h5>Payroll Summary</h5>

            <div className="payroll_columns">

              <div className="payroll_column">

                <form action="">
                  <label htmlFor=""><h4>Business name</h4></label>
                  <input type="text" placeholder="Enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Business email</h4></label>
                  <input type="email" placeholder="Enter phone number" />
                </form>
                
              </div>

              <div className="payroll_column">

                <form action="">
                  <label htmlFor=""><h4>Business address I</h4></label>
                  <input type="text" placeholder="Enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Business address II</h4></label>
                  <input type="text" placeholder="Enter phone number" />
                </form>
                
              </div>

              <div className="payroll_column">

                <form action="">
                  <label htmlFor=""><h4>Break hours</h4></label>
                  <input type="number" placeholder="Enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Lateness hour</h4></label>
                  <input type="number" placeholder="Enter phone number" />
                </form>
                
              </div>

              <div className="payroll_column">

                <form action="">
                  <label htmlFor=""><h4>Lateness fine</h4></label>
                  <input type="number" placeholder="Enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Business number</h4></label>
                  <input type="number" placeholder="Enter phone number" />
                </form>
                
              </div>

              <button className="filled-btn"><h4>Submit</h4></button>

            </div>

          </div>

          <div className="working_hours">
            <h5>Working hours</h5>

            <div className="working_hours_colums">

              <div className="working_hours_column">
                <h4 className="week_day">Sunday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Monday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Tuesday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""> <h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Wednesday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Thursday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Friday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close: </h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Saturday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <button className="filled-btn"><h4>Submit</h4></button>

            </div>

          </div>

          <div className="payment">
            <h4>Payment Structure</h4>

            <div className="payment_columns">

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>Salary date</h4></label>
                  <input type="number" placeholder="enter date" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Wages day</h4></label>
                  <input type="text" placeholder="enter day" />
                </form>
                
              </div>

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>Tax</h4></label>
                  <input type="number" placeholder="enter percentage" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Pension</h4></label>
                  <input type="number" placeholder="enter percentage" />
                </form>
                
              </div>

              <button className="filled-btn"><h4>submit</h4></button>

            </div>
          </div>

        </div>

        <div className="personal_body">

          <h4>Personal Settings</h4>

            <div className="payment_columns">

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>First name</h4></label>
                  <input type="text" placeholder="enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Last name</h4></label>
                  <input type="text" placeholder="enter name" />
                </form>
                
              </div>

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>Email</h4></label>
                  <input type="email" placeholder="enter email" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Role</h4></label>
                  <input type="text" placeholder="enter role" />
                </form>
                
              </div>

              <button className="filled-btn"><h4>submit</h4></button>

            </div>

        </div>

        <div className="password_body">
          <h5>change Password</h5>

          <div className="password_column">

            <form action="">
              <label htmlFor=""><h4>Old Password</h4></label>
              <input type="password" placeholder="enter password" />
            </form>

            <form action="">
              <label htmlFor=""><h4>New password</h4></label>
              <input type="text" placeholder="enter password" />
            </form>

            <form action="">
              <label htmlFor=""><h4>Confirm password </h4></label>
              <input type="text" placeholder="enter password" />
            </form>

            <button className="filled-btn"><h4>Submit</h4></button>
            
          </div>

        </div>
      </div>
      
    </div>

  )
}

export default Businessetting;
