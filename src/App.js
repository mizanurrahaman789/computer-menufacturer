
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Part from './Pages/Shared/Part/Part';
import Banner from './Pages/Shared/Banner/Banner';
import Footer from './Pages/Shared/Footer/Footer';
import Parts from './Pages/Shared/Parts/Parts';
import Orders from './Pages/Shared/Orders/Orders';
import Purchase from './Pages/Purchase/Purchase';
import PartsDetails from './Pages/Shared/PartsDetails/PartsDetails';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path="/purchase/:purchaseId" element={<PartsDetails />} />

        <Route path="/part" element={<Part />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </div>
  );
}

export default App;
