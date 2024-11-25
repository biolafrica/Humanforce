import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import Homepage from "./home";


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>

        <div className="content">
          <Routes>
            <Route path='/'  element={<Homepage/>} />
            <Route path='/login'  element={<Login/>} />

          </Routes>
        </div>

        <Footer/>
      </div>

    </Router>
    
  );
}

export default App;
