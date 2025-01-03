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
import NewTeam from "./admin/newteam";
import Team from "./admin/team";
import NewStaff from "./admin/newstaff";
import Payroll from "./admin/payroll";
import PayrollEdit from "./admin/payrolledit";
import AttendanceAdmin from "./admin/attendanceadmin";
import AttendanceMore from "./admin/attendancemore";
import Businessetting from "./admin/businessetting";
import PrivateRoute from "./components/privateroute";


function App() {
  return (

    <Router>
      <Routes>

        {/* user routes*/}
        <Route path='/' element={
          <PrivateRoute>
            <UserLayout><Homepage/></UserLayout>
          </PrivateRoute> 
          }
        />

        <Route path='/login'  element={<UserLayout><Login/></UserLayout>} />

        <Route path='/clock/:id' element={
          <PrivateRoute>
            <UserLayout><ClockDetails/></UserLayout>
          </PrivateRoute>
          }
        />

        <Route path='/payslip' element={ 
          <PrivateRoute>
            <UserLayout><Payslip/></UserLayout>
          </PrivateRoute>
          }
        /> 

        <Route path='/attendance' element={   
          <PrivateRoute>
            <UserLayout><Attendance/></UserLayout>
          </PrivateRoute> 
          }
        />

        {/* admin routes*/}
        <Route path='/admin'  element={<AdminLayout><Dashboard/></AdminLayout>} />
        <Route path='/admin/staff'  element={<AdminLayout><Staff/></AdminLayout>} />
        <Route path='/admin/staff/new'  element={<AdminLayout><NewStaff/></AdminLayout>} />
        <Route path='/admin/team'  element={<AdminLayout><Team/></AdminLayout>} />
        <Route path='/admin/team/new'  element={<AdminLayout><NewTeam/></AdminLayout>} />
        <Route path='/admin/payroll'  element={<AdminLayout><Payroll/></AdminLayout>} />
        <Route path='/admin/payroll/edit'  element={<AdminLayout><PayrollEdit/></AdminLayout>} />
        <Route path='/admin/attendance'  element={<AdminLayout><AttendanceAdmin/></AdminLayout>} />
        <Route path='/admin/attendance/more/:id'  element={<AdminLayout><AttendanceMore/></AdminLayout>} />
        <Route path='/admin/settings'  element={<AdminLayout><Businessetting/></AdminLayout>} />
      </Routes>
        
    </Router>
    
  );
}

export default App;
