 import {useState} from 'react';
 import {Redirect} from 'react-router-dom';
import { LogOut } from '../../Assets/Icons';
import { ProfilePhoto } from '../../Assets/Images';


import '../../Widgets/SideBar/SideBar.css';

const LogOutButton=()=>{

    const [loggedOut, setLoggedOut]= useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogOut=(props)=>{
        localStorage.removeItem("token")
        setLoggedOut(true)
    };
    if (loggedOut){
        return <Redirect to="/" push={true} />
    }
    return(
        <div>
        {
            isLoggedIn ?
            

            <div className="nav-link">
                <img src={ProfilePhoto} alt="" className=" btn profilePhoto"/>
                <button type="button" class="btn logOutBtn" onClick={handleLogOut} ><img src={LogOut} alt=""/></button> 
                <span id="logout">Logout</span>
            </div>
         : " still working"
        }
        </div>


    );
}

export {LogOutButton}