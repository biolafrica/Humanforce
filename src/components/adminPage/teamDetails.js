import { Link } from "react-router-dom";
import {AlertPopup, useAlert} from "../alert";
import Pagination from "../pagination";
import usePagination from "../../hooks/usePagination";
import { useNavigate } from "react-router-dom";
import Empty from "../empty";

const TeamDetails =({users, teams})=>{
  const {alert, showAlert} = useAlert();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminAuthToken");

  const handleDelete = async(id)=>{
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
        navigate("/admin/team")
      }else{
        showAlert("Failed to delete selected team", "error")
      }
      
    } catch (error) {
      console.error("Error deleting team:", error)
      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Error deleting team member ", "error");
      }
    }

  }

  const {
    currentPage, 
    currentData, 
    totalPages, 
    goToNextPage,
    goToPreviousPage 
  } = usePagination(teams ||  5)


  return(
    <>

      <div className="team_sbody">

        <div className="table_header">
          <h6 className="date_column">Name</h6>
          <h6 className="clockin_column">Role</h6>
          <h6 className="clockout_column">Email</h6>
          <h6 className="hours_column">User ID</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <div className="table_body my_table">

          { currentData.length === 0 
            ? (<Empty/>) 
            :(
              currentData.map((team)=>{
               
                let matchingUser;
                users.forEach((user)=>{
                  if(team.staff_id === user._id){
                    matchingUser = user
                  }
                })

                return(
                  <div className="column" key={team._id}>
                    <h6 className="date_column">{matchingUser.firstname} {matchingUser.lastname}</h6>
                    <h6 className="clockin_column">{team.team_role}</h6>
                    <h6 className="clockout_column">{matchingUser.email_address}</h6>
                    <h6 className="hours_column">{matchingUser.staff_code}</h6>
                    <h6 className="status_column">
                      <Link to= {`/admin/team/${team._id}`}><img src="/icons/Edit.svg" alt="edit icon" /></Link>
                      <img
                        src="/icons/Delete.svg" 
                        alt="Delete-icon"
                        onClick={()=> handleDelete(team._id)}
                        style={{cursor : "pointer"}} 
                      />
                    </h6>
                  </div>
                )
              })
            )
          }

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