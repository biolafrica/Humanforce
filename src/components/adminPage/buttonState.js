const teamString = localStorage.getItem("team") ;
const team = teamString ? JSON.parse(teamString) : {};

const AdminExclusiveButton = team.role === "Admin" ? "filled-btn" : "inactive-btn";
const AdminNonExclusiveButton = team.role === "Admin" || team.role === "Finance" ||team.role === "Operations" ? "filled-btn" : "inactive-btn";


export {
  AdminExclusiveButton,
  AdminNonExclusiveButton
}