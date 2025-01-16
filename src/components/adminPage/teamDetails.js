import { Link } from "react-router-dom";
import {AlertPopup, useAlert} from "../alert";
import Pagination from "../pagination";
import usePagination from "../../hooks/usePagination";

const TeamDetails =({users, teams})=>{
  const {alert, showAlert} = useAlert();

  const handleDelete = async(id)=>{
    const token = localStorage.getItem("adminAuthToken");

    try {
      const response = await fetch(`http://localhost:4000/admin/team-delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if(response.ok){
        showAlert(result.message || "Team deleted succesfully", "success");

      }else{
        showAlert("Failed to delete selected team", "error")
      }
      
    } catch (error) {
      console.error("Error deleting team:", error)
      showAlert("An error occured while deleting the team ", "error");
      
      
    }

  }

  const {
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage 
  } = usePagination(teams, 5)


  return(
    <>

      <div className="team_body">

        <div className="table_header">
          <h6 className="date_column">Name</h6>
          <h6 className="clockin_column">Role</h6>
          <h6 className="clockout_column">Email</h6>
          <h6 className="hours_column">User ID</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <div className="table_body">

          {currentData.map((team)=>{

            let matchingUser;
            users.forEach((user)=>{
              if(team.staff_code === user.staff_code){
                matchingUser = user
              }
            })

            return(
              <div className="column" key={team._id}>
                <h6 className="date_column">{matchingUser.firstname} {matchingUser.lastname}</h6>
                <h6 className="clockin_column">{team.team_role}</h6>
                <h6 className="clockout_column">{matchingUser.email_address}</h6>
                <h6 className="hours_column">{team.staff_code}</h6>
                <h6 className="status_column">
                  <Link to={`/admin/team/${team._id}`}><img src="/icons/Edit.svg" alt="" /></Link>
                  <img
                    src="/icons/Delete.svg" 
                    alt="Delete-icon"
                    onClick={()=> handleDelete(team._id)}
                    style={{cursor : "pointer"}} 
                  />
                </h6>
              </div>
            )}
          )}

        </div>

        <Pagination
          currentPage = {currentPage} 
          totalPages = {totalPages} 
          goToNextPage ={goToNextPage} 
          goToPreviousPage ={goToPreviousPage}
        />
       
      </div>

      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}

    </>


  )

}

export default TeamDetails;