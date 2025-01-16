import React from "react";
import AdminNav from "../nav/adminnav";
import SideNav from "../nav/sidenav";
import { useState } from "react";

const AdminLayout =({children})=>{
  const [header, setHeader] = useState("Dashboard")
 
  function changeHeader(dashboard){
    setHeader(dashboard)
  }
  return(
    <div className="admin-layout">
      <SideNav changeHeader={changeHeader} />
      <div className="admin-content">
        <AdminNav header={header}/>
        <main>
          {children}
        </main>
      </div>

    </div>

  )

}

export default AdminLayout;
