import React from "react";
import AdminNav from "../nav/adminnav";
import SideNav from "../nav/sidenav";

const AdminLayout =({children})=>{

  return(
    <div className="admin-layout">
      <SideNav/>
      <div className="admin-content">
        <AdminNav/>
        <main>
          {children}
        </main>

      </div>

    </div>

  )

}

export default AdminLayout;
