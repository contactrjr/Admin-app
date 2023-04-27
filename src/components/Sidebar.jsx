import './../styles/Sidebar.scss'
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutline from "@mui/icons-material/PersonOutline";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import { useContext } from "react";
//import "../img/admin-portal.png"

const SideBar = () => {

    const {dispatch} = useContext(AuthContext);
    const handleLogout = () =>{
        
        dispatch({type:"LOGOUT"});
        localStorage.setItem("user", null)
    }

    return (
        <div className="sidebar">
            <div className="top">
            <NavLink to="/" >
               <img className='image' src="https://ncua.gov/sites/default/files/inline-images/admin-portal.png" alt='' />
            </NavLink >
            </div>
            <hr/>
            <div className="middle">
                <ul>
                    <p className="title">
                       Dashboard
                    </p>
                    <NavLink to="/users" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutline className='icons'/>
                        <span>User Details</span>
                    </li>
                    </NavLink>
                    <li>
                        <DashboardIcon className='icons'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <LocalGroceryStoreIcon className='icons'/>
                        <span>Order Details</span>
                    </li>
                    <p className="title"> Services </p>
                    <li>
                        <SettingsSystemDaydreamIcon className='icons'/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icons' />
                        <span>Logs</span>
                    </li>
                    <hr/>
                    <li>
                        <LogoutIcon className="icons"/>
                        <span onClick={handleLogout}>Logout</span>
                    </li>
                </ul>

            </div>
        </div>
    )
};

export default SideBar;