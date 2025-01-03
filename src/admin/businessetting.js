import useFetch from "../hooks/useFetch";
import Business from "../components/business";
import DoubleUseFetch from "../hooks/doubleuseFetch";

const Businessetting =()=>{
  const urlI = 'http://localhost:4000/admin/business';
  const urlII = 'http://localhost:4000/admin/working-hours';
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII);

  
  if(errorMessage) return(<div> {errorMessage}</div>); 
  if(isLoading) return(<div>....isLoading</div>);
  if(dataI && dataII){
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

        <Business data={dataI.business} work={dataII}/>

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
  )}

}

export default Businessetting;


