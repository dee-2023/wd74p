import './App.css';
import './pages/login.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './layouts/mainlayout/RootLayout';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import React from 'react';
import MemberLayout from './layouts/memberlayout/MemberLayout';
import Dashboard from './layouts/memberlayout/memberpages/Dashboard';
import Shop from './layouts/memberlayout/memberpages/OnlineShop';
import Plan from './pages/Plan';
import Home from './pages/Home'; 
//import ProtectedRoute from './layouts/memberlayout/ProtectedRoute';





const App = () => {

  
  return (
    <router> 
<Routes>
      <Route element={ <RootLayout /> } >
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/about" element={<AboutPage />}> </Route>
        <Route path="/contact" element={<Contact /> }> </Route>
        <Route path="/blog-page" element={<BlogPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>

      <Route element={<MemberLayout />}>  
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/online-shop" element={<Shop />}> </Route>
     </Route> 

     <Route path="/Home" element={<Home />} /> {/* Corrected path */}
     <Route path="/Plan" element={<Plan />} /> {/* Corrected path */}
      </Routes>  
    </router>



  );

}
export default App;