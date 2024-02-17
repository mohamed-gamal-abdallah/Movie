import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
    return ( <>
    <Navbar></Navbar>
    <div className="py-4 bg-black">
        <Outlet ></Outlet>
        </div>
    
    <Footer/>
    
    </> );
}

export default Layout;