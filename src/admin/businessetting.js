const Businessetting =()=>{
  returns(
    <div className="businesseting_cont">

      <div className="businessettings_head">
        <div className="staff_cont_head">
          <h5 className="total select">Business</h5>
          <h5 className="contract">Personal</h5>
          <h5 className="fixed">Password</h5>
        </div>
      </div>

      <div className="businessettings_body">

        <div className="bio_data">
          <h4>Payroll Summary</h4>

          <div className="payroll_columns">

            <div className="payroll_column">

              <form action="">
                <label htmlFor="">Business name</label>
                <input type="text" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Business email</label>
                <input type="email" placeholder="enter phone number" />
              </form>
              
            </div>

            <div className="payroll_column">

              <form action="">
                <label htmlFor="">Business address I</label>
                <input type="text" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Business eaddress II</label>
                <input type="text" placeholder="enter phone number" />
              </form>
              
            </div>

            <div className="payroll_column">

              <form action="">
                <label htmlFor="">Break hours</label>
                <input type="number" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Lateness hour</label>
                <input type="number" placeholder="enter phone number" />
              </form>
              
            </div>

            <div className="payroll_column">

              <form action="">
                <label htmlFor="">Lateness fine</label>
                <input type="number" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Business number</label>
                <input type="number" placeholder="enter phone number" />
              </form>
              
            </div>

          </div>

        </div>

        <div className="working_hours">
          <h4>Working hours</h4>

          <div className="working_hours_colums">

            <div className="working_hours_column">
              <h4 className="week_day">Sunday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Monday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Tuesday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Wednesday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Thursday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Friday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <div className="working_hours_column">
              <h4 className="week_day">Saturday</h4>
              <div className="work_hours">
                <form action="">
                  <label htmlFor="">Open:</label>
                  <input type="text" />
                </form>

                <form action="">
                  <label htmlFor="">Close:</label>
                  <input type="text" />
                </form>
              </div>
            </div>

            <button>Submit</button>

          </div>




        </div>

        <div className="payment">
          <h4>Payment Structure</h4>

          <div className="payment_columns">

            <div className="payment_column">

              <form action="">
                <label htmlFor="">Salary date</label>
                <input type="number" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Wages day</label>
                <input type="text" placeholder="enter phone number" />
              </form>
              
            </div>

            <div className="payment_column">

              <form action="">
                <label htmlFor="">Tax</label>
                <input type="number" placeholder="enter full name" />
              </form>

              <form action="">
                <label htmlFor="">Pension</label>
                <input type="number" placeholder="enter phone number" />
              </form>
              
            </div>

            <button>submit</button>

          </div>


        </div>

      </div>
      
    </div>

  )
}

export default Businessetting;
