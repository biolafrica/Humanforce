import React from "react";
import Navbar from "../nav/navbar";
import Footer from "../footer";


const UserLayout = ({children})=>{
  return(
    <div>
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default UserLayout;