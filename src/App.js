import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Homepage from "./home";
import Login from "./login";
import ClockDetails from "./clockDetails";
import Payslip from "./payslip";


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

          </Routes>
        </div>

        <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
