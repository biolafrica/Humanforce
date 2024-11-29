import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Homepage from "./home";
import Login from "./login";
import ClockDetails from "./clockDetails";
import Payslip from "./payslip";
import Attendance from "./attendance";


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path='/'  element={<Homepage/>} />
            <Route path='/login'  element={<Login/>} />
            <Route path='/clock'  element={<ClockDetails/>} />
            <Route path='/payslip'  element={<Payslip/>} />
            <Route path='/attendance'  element={<Attendance/>} />

          </Routes>
        </div>

        <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
