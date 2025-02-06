import Business from "../../components/adminPage/business";
import DoubleUseFetch from "../../hooks/doubleuseFetch";
import Loading from "../../components/loading";

const Businessetting =()=>{
  const urlI = `${process.env.REACT_APP_API_URL}/admin/business`;
  const urlII = `${process.env.REACT_APP_API_URL}/admin/working-hours`;
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


