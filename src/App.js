import { HashRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/userlayout";
import AdminLayout from "./layout/adminlayout";
import Homepage from "./pages/user/home";
import Login from "./pages/user/login";
import AdminLogin from "./pages/admin/login";
import ClockDetails from "./pages/user/clockDetails";
import Payslip from "./pages/user/payslip";
import UserAttendance from "./pages/user/userAttendance";
import Dashboard from "./pages/admin/dashboard";
import DashboardUser from "./pages/admin/user";
import Staff from "./pages/admin/staff";
import RegisteredStaff from "./pages/admin/registeredStaff";
import RegisteredTeam from "./pages/admin/registeredTeam";
import NewTeam from "./pages/admin/newteam";
import Team from "./pages/admin/team";
import NewStaff from "./pages/admin/newstaff";
import Payroll from "./pages/admin/payroll";
import ContractStaffEdit from "./pages/admin/contractStaffedit";
import FixedStaffEdit from "./pages/admin/fixedStaffEdit";
import AttendanceAdmin from "./pages/admin/attendanceadmin";
import AttendanceMore from "./pages/admin/attendancemore";
import Businessetting from "./pages/admin/businessetting";
import PathError from "./pages/error/pathError";
import ServerError from "./pages/error/serverError";
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
              <UserLayout><UserAttendance/></UserLayout>
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
            <UserLayout><AdminLogin/></UserLayout>  
          } 
        />


        <Route path='/admin/user'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><DashboardUser/></AdminLayout>
            </AdminPrivateRoute>     
          } 
        />

        <Route path='/admin/staff'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><Staff/></AdminLayout>
            </AdminPrivateRoute>     
          } 
        />

        <Route path='/admin/staff/:id'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><RegisteredStaff/></AdminLayout>
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

        <Route path='/admin/team/:id'  element=
          {
            <AdminPrivateRoute>
              <AdminLayout><RegisteredTeam/></AdminLayout>
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



        {/* error routes*/}

        <Route path='*'  element=
          {
            <UserLayout><PathError/></UserLayout>
          } 
        />

        <Route path='/server-error'  element=
          {
            <UserLayout><ServerError/></UserLayout>
          } 
        />

      </Routes>
        
    </Router>
    
  );
}

export default App;
