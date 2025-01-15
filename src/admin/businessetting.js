import useFetch from "../hooks/useFetch";
import Business from "../components/adminPage/business";
import DoubleUseFetch from "../hooks/doubleuseFetch";

const Businessetting =()=>{
  const urlI = 'http://localhost:4000/admin/business';
  const urlII = 'http://localhost:4000/admin/working-hours';
  const token = localStorage.getItem("adminAuthToken")
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII,token);

  
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

      </div>
      
    </div>
  )}

}

export default Businessetting;


