import useTeam from "../../components/adminPage/buttonState";
import UseFetch from "../../hooks/userFetch";
import Loading from "../../components/common/loading";
import DashboardDetails from "../../components/adminPage/dashboardDetails";
import PathError from "../error/pathError";

const Dashboard =()=>{
  const {team} = useTeam();
  const url = `${process.env.REACT_APP_API_URL}/admin/dashboard`;
  const token = localStorage.getItem("adminAuthToken");
  const {data, isLoading, errorMessage} = UseFetch(url,token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(data){

    return(
      <div className="dashboard-cont">

        <div className="dashboard_intro">

          <div className="intro_text">
            <h3>Hello {team.firstname}.</h3>
            <h4>Get Started: Manage staff and their activities</h4>
          </div>

          <div className="intro_image">
            <img src="images/undraw_co_workers_re_1i6i.svg" alt="" />
          </div>

        </div>

        <DashboardDetails attendance={data.attendance} staff={data.staff}/>

      </div>
    )

  }
}

export default Dashboard;