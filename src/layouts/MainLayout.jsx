import { Outlet } from 'react-router-dom';
import Options from '../components/Menu';
import Navbar from '../components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (    
    <>
        <div>
    <Options />
    <Navbar />
    </div>
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default MainLayout