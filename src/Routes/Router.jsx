import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../pages/Login/Login';
import Panel from '../pages/Panel/Panel';
import Signup from '../pages/Signup/Signup';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router