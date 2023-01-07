import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Customer/Home';
import Venues from './Components/venues/Venues';
import Vendor from './pages/vendorPage/Vendor';
import RedirectRoute from './RedirectRoutes';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';


const CustomerRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/venues/hall1" element={<Vendor />} />
                <Route path='/signin' element={
                    <RedirectRoute>
                        <Login />
                    </RedirectRoute>
                } />
                <Route path='/signup' element={
                    <RedirectRoute>
                        <Register />
                    </RedirectRoute>
                } />
            </Routes>
        </Router>
    );
}

export default CustomerRoutes;
