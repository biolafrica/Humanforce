import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userlayout";
import AdminLayout from "./layout/adminlayout";
import Homepage from "./user/home";
import Login from "./user/login";
import AdminLogin from "./admin/login";
import ClockDetails from "./user/clockDetails";
import Payslip from "./user/payslip";
import Attendance from "./user/attendance";
import Dashboard from "./admin/dashboard";
import Staff from "./admin/staff";
import NewTeam from "./admin/newteam";
import Team from "./admin/team";
import NewStaff from "./admin/newstaff";
import Payroll from "./admin/payroll";
import ContractStaffEdit from "./admin/newContractStaffEdit";
import FixedStaffEdit from "./admin/fixedStaffEdit";
import AttendanceAdmin from "./admin/attendanceadmin";
import AttendanceMore from "./admin/attendancemore";
import Businessetting from "./admin/businessetting";
import {PrivateRoute,AdminPrivateRoute} from "./utils/privateroute";


function App() {
  return (

    <Router>
      <Routes>

        {/* user routes*/}
        <Route path='/' element=
          {
            <PrivateRoute>
              <UserLayout><Homepage/></UserLayout>
            </PrivateRoute> 
          }
        />

        <Route path='/login'  element=
          {
           <UserLayout><Login/></UserLayout>
          } 
        />

        <Route path='/clock/:id' element=
          {
            <PrivateRoute>
              <UserLayout><ClockDetails/></UserLayout>
            </PrivateRoute>
          }
        />

        <Route path='/payslip' element=
          { 
            <PrivateRoute>
              <UserLayout><Payslip/></UserLayout>
            </PrivateRoute>
          }
        /> 

        <Route path='/attendance' element=
          {   
            <PrivateRoute>
              <UserLayout><Attendance/></UserLayout>
            </PrivateRoute> 
          }
        />



        {/* admin routes*/}
        
        <Route path='/admin'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Dashboard/></AdminLayout>
            </AdminPrivateRoute>   
          } 
        />

        <Route path='/admin/Login'  element=
          {
            <AdminLayout><AdminLogin/></AdminLayout>  
          } 
        />

        <Route path='/admin/staff'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Staff/></AdminLayout>
            </AdminPrivateRoute>     
          } 
        />

        <Route path='/admin/staff/new'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><NewStaff/></AdminLayout>
            </AdminPrivateRoute>    
          } 
        />

        <Route path='/admin/team'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Team/></AdminLayout>
            </AdminPrivateRoute>          
          }
        />
        
        <Route path='/admin/team/new'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><NewTeam/></AdminLayout>
            </AdminPrivateRoute>              
          } 
        />

        <Route path='/admin/payroll'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Payroll/></AdminLayout>
            </AdminPrivateRoute>           
          } 
        />

        <Route path='/admin/payroll/edit/contract/:id'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><ContractStaffEdit/></AdminLayout>
            </AdminPrivateRoute>                
          } 
        />

        <Route path='/admin/payroll/edit/fixed/:id'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><FixedStaffEdit/></AdminLayout>
            </AdminPrivateRoute>          
          } 
        />

        <Route path='/admin/attendance'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><AttendanceAdmin/></AdminLayout>
            </AdminPrivateRoute>    
          } 
        />

        <Route path='/admin/attendance/more/:id'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><AttendanceMore/></AdminLayout>
            </AdminPrivateRoute>      
          } 
        />

        <Route path='/admin/settings'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Businessetting/></AdminLayout>
            </AdminPrivateRoute>            
          } 
        />

      </Routes>
        
    </Router>
    
  );
}

export default App;
