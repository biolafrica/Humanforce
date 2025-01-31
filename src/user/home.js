import DoubleUseFetch from "../hooks/doubleuseFetch";
import HomeClicks from "../components/userPage/homeClick";
import Loading from "../components/loading";

const Homepage=()=>{
  const urlI = 'http://localhost:4000/business';
  const urlII = 'http://localhost:4000/working-hours';
  const token = localStorage.getItem("authToken")
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(dataI && dataII){
    return(
    <div>
      <HomeClicks business={dataI} workingHours={dataII.workingHours} />
    </div>
  )
  }
  

}

export default Homepage;