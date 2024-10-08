import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BuildingOwner from './pages/BuildingOwner'
import ManageListings from './pages/ManageListings'
import ManageEnquiries from './pages/ManageEnquiries'
import Listings from './pages/Listings'
import Enquiry from './pages/Enquiry'
import ResidentCommunication from './pages/ResidentCommunication'
import ResidentFeedback from './pages/ResidentFeedback'
import PropertyFee from './pages/Propertyfee'
import MaintenanceRepair from './pages/MaintenanceRepair'
import BuildingManager from './pages/BuildingManager'
import ParkingManagement from './pages/ParkingManagement';
import RenovationManagement from './pages/RenovationManagement';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route path="/Bulding-manager" Component={BuildingManager}></Route>
            <Route path="/building-owner" Component={BuildingOwner}></Route>
            <Route path="/manage-listings" Component={ManageListings}></Route>
            <Route path="/manage-enquiries" Component={ManageEnquiries}></Route>
            <Route path="/listings" Component={Listings}></Route>
            <Route path="/enquiry" Component={Enquiry}></Route>

            <Route path="/communication" element={<ResidentCommunication />} />
            <Route path="/feedback" element={<ResidentFeedback />} />
            
            <Route path="/propertyfee" element={<PropertyFee />} />
            <Route path="/MaintenanceRepair" element={<MaintenanceRepair />} />
            
            <Route path="/Parking" element={<ParkingManagement />} />
            <Route path="/Renovation" element={<RenovationManagement />} />
            
          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
