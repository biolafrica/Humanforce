import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userlayout";
import AdminLayout from "./layout/adminlayout";
import Homepage from "./user/home";
import Login from "./user/login";
import ClockDetails from "./user/clockDetails";
import Payslip from "./user/payslip";
import Attendance from "./user/attendance";
import Dashboard from "./admin/dashboard";
import Staff from "./admin/staff";
import NewStaff from "./admin/newstaff";


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
        <Route path='/admin'  element={<AdminLayout><Dashboard/></AdminLayout>} />
        <Route path='/admin/staff'  element={<AdminLayout><Staff/></AdminLayout>} />
        <Route path='/admin/staff/new'  element={<AdminLayout><NewStaff/></AdminLayout>} />
      </Routes>
        
    </Router>
    
  );
}

export default App;
