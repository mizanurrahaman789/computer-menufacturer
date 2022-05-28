
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
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddAReview from './Pages/AddAReview/AddAReview';
import MyProfile from './Pages/MyProfile/MyProfile';
import Users from './Pages/Users/Users';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddAReview></AddAReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="/purchase/:purchasesId" element={<PartsDetails />} />

        <Route path="/part" element={<Part />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
