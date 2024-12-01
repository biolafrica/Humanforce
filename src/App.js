import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userlayout";

import Footer from "./footer";
import Navbar from "./nav/navbar";
import Homepage from "./home";
import Login from "./login";
import ClockDetails from "./clockDetails";
import Payslip from "./payslip";
import Attendance from "./attendance";


function App() {
  return (

    <Router>
      <Routes>

        {/* user routes*/}
        <Route path='/'  element={<UserLayout><Homepage/></UserLayout>} />
        <Route path='/login'  element={<UserLayout><Login/></UserLayout>} />
        <Route path='/clock'  element={<UserLayout><ClockDetails/></UserLayout>} />
        <Route path='/payslip'  element={<UserLayout><Payslip/></UserLayout>} />
        <Route path='/attendance'  element={<UserLayout><Attendance/></UserLayout>} />

        {/* admin routes*/}
      </Routes>
        
    </Router>
    
  );
}

export default App;
