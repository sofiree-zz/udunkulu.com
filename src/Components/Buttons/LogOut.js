 import {useState} from 'react';
 import {Redirect} from 'react-router-dom';
import { LogOut } from '../../Assets/Icons';

import '../../Widgets/SideBar/SideBar.css';

const LogOutButton=()=>{

    const [loggedOut, setLoggedOut]= useState(false);
    const handleLogOut=()=>{
        localStorage.removeItem("token")
        setLoggedOut(true)
    };
    if (loggedOut){
        return <Redirect to="/dashboard" push={true} />
    }
    return(
        <>
        <div className="nav-link">
            <button type="button" class="btn logOutBtn" onClick={handleLogOut} ><img src={LogOut} alt=""/></button> 
            <span id="logout">Logout</span>
        </div>
        </>


    );
}

export {LogOutButton}