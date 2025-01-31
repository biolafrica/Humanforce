import Business from "../components/adminPage/business";
import DoubleUseFetch from "../hooks/doubleuseFetch";
import Loading from "../components/loading";

const Businessetting =()=>{
  const urlI = 'http://localhost:4000/admin/business';
  const urlII = 'http://localhost:4000/admin/working-hours';
  const token = localStorage.getItem("adminAuthToken");
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII,token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return(<div> {errorMessage}</div>); 
  if(dataI && dataII){
    return(
    <div className="businesseting_cont">
      
      <div className="settings_cont">

        <Business data={dataI.business} work={dataII}/>

      </div>
      
    </div>
  )}

}

export default Businessetting;


