const Dashboard =()=>{
  return(
    <div className="dashboard-cont">

      <div className="dashboard_intro">

        <div className="intro_text">
          <h3>Hello Abiodun.</h3>
          <h4>Manage our staff and their activities</h4>
        </div>

        <div className="intro_image">
          <img src="images/undraw_co_workers_re_1i6i.svg" alt="" />
        </div>

      </div>

      <div className="dashboard_body">
        <h4>Dashboard Analytics</h4>
        <input type="month" />

        <div className="analytics_cont">

          <div className="up_analytics">

            <div className="analyse">
              <div className="analyse_up">
                <img src="icons/Person 2.svg" alt="" />
                <h4>Attendance</h4>
              </div>

              <h4><b>50</b></h4>

            </div>

            <div className="analyse">

              <div className="analyse_up">
                <img src="icons/Person check.svg" alt="" />
                <h4>Early</h4>
              </div>

              <h4><b>40</b></h4>
            </div>

            <div className="analyse">
              <div className="analyse_up">
                <img src="icons/Person cancel.svg" alt="" />
                <h4>Late</h4>
              </div>

              <h4><b>10</b></h4>
            </div>

          </div>

          <div className="down_analytics">

            <div className="analyse">
              <div className="analyse_up">
                <img src="icons/Group.svg" alt="" />
                <h4>Staff</h4>
              </div>

              <h4><b>100</b></h4>
            </div>

            <div className="analyse">
              <div className="analyse_up">
                <img src="icons/Blockchain New Logo.svg" alt="" />
                <h4>Wages</h4>
              </div>

              <h4><b>N1,000,000:00</b></h4>
            </div>

            <div className="analyse">
              <div className="analyse_up">
                <img src="icons/Blockchain New Logo.svg" alt="" />
                <h4>Salary</h4>
              </div>

              <h4><b>N2,000,000:00</b></h4>
            </div>

          </div>

        </div>

      </div>

    </div>
  )

}

export default Dashboard;