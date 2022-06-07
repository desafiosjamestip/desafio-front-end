import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import RegisterProducts from "../pages/RegisterProducts";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
            <Route path="/register-products" element={<RegisterProducts/>}></Route>
        </Routes>
    )
}

export default MainRoutes
