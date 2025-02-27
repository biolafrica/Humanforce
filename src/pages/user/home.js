import DoubleUseFetch from "../../hooks/doubleuseFetch";
import HomeClicks from "../../components/userPage/homeClick";
import Loading from "../../components/common/loading";
import PathError from "../error/pathError";

const Homepage=()=>{
  console.log(process.env.REACT_APP_API_URL)
  const urlI = `${process.env.REACT_APP_API_URL}/business`;
  const urlII = `${process.env.REACT_APP_API_URL}/working-hours`;
  const token = localStorage.getItem("authToken")
  const {dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI,urlII, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(dataI && dataII){
    return(
    <div>
      <HomeClicks business={dataI} workingHours={dataII.workingHours} />
    </div>
  )
  }
  

}

export default Homepage;