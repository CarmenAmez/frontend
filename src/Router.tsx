import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PrivateRoute from "./PrivateRouter";
import TeamPage from "./pages/TeamPage";
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />                
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
                <Route path="/teampage" element={<PrivateRoute><TeamPage /></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;