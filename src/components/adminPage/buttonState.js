import { useState, useEffect } from "react";

const useTeam =()=>{

  const [team, setTeam] = useState({})
  useEffect(()=>{
    const teamString = localStorage.getItem('team');
    if(teamString){
      setTeam(JSON.parse(teamString))
    }
  }, [])
  const isAdmin = team.role === "Admin";
  const isAdminFinOrOps = team.role === "Admin" || team.role === "Finance" ||team.role === "Operations";

  return{
    team,
    AdminExclusiveButton : isAdmin? "filled-btn" : "inactive-btn",
    AdminNonExclusiveButton :isAdminFinOrOps ? "filled-btn" : "inactive-btn"

  }


}


export default useTeam;