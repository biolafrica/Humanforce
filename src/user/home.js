
import DoubleUseFetch from "../hooks/doubleuseFetch";
import HomeClicks from "../components/userPage/homeClick";

const Homepage=()=>{
  const urlI = 'http://localhost:4000/admin/business';
  const urlII = 'http://localhost:4000/admin/working-hours';
  const token = localStorage.getItem("authToken")
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII, token);


  if(isLoading) return(<div>...isLoading</div>)
  if(errorMessage) return({errorMessage})
  if(dataI && dataII){
    return(
    <div>
      <HomeClicks business={dataI} workingHours={dataII} />
    </div>
  )
  }
  

}

export default Homepage;