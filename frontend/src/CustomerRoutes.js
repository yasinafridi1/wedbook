import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Customer/Home';
import Venues from './Components/venues/Venues';
import Vendor from './pages/vendorPage/Vendor';
import RedirectRoute from './RedirectRoutes';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Error from './pages/Error/Error';
import ServiceRegister from './pages/ProviderRegistery/serviceRegister';
import ProtectedRoute from './ProtectedRoutes';
import { useSelector } from 'react-redux';

const CustomerRoutes = () => {
    const userdata = useSelector((state) => state.userInfo.user);
    let user;
    if (userdata.payload) {
        user = true;
    } else {
        user = false;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/venues/hall1" element={<Vendor />} />
                <Route path='/register-services' element={
                    <ProtectedRoute user={user}>
                        <ServiceRegister />
                    </ProtectedRoute>
                } />
                <Route path='/signin' element={
                    <RedirectRoute user={user}>
                        <Login />
                    </RedirectRoute>
                } />
                <Route path='/signup' element={
                    <RedirectRoute user={user}>
                        <Register />
                    </RedirectRoute>
                } />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default CustomerRoutes;
