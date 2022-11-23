import  React,{ Component } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Products from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import DeliveryIcon from '@mui/icons-material/AirportShuttleOutlined';
import StateIcon from '@mui/icons-material/CottageOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


 class Sidebar extends Component{

   render(){
    return(
        <div className="sidebar">
            <div className="top"> 
                <span> Logo </span>
            </div>
            <hr/>
            <div className="center"> 
                <ul>
                    <li> 
                        <DashboardIcon className="icon"/>
                        <span>   Dashboard  </span>
                    </li>
                    <li> 
                        <Person3OutlinedIcon className="icon"/>
                        <span>   Users  </span>
                    </li>
                    <li> 
                        <Products className="icon"/>
                        <span> Products </span>
                    </li>
                    <li> 
                        <DeliveryIcon className="icon"/>
                        <span> Delivery </span>
                    </li>
         
                    <li> 
                        <StateIcon className="icon" />
                        <span> State </span>
                    </li>
                    <li> 
                        <NotificationsIcon className="icon"/>
                        <span> Notification </span>
                    </li>
        
                    <li> 
                        <HealthAndSafetyOutlinedIcon className="icon"/>
                        <span> System Health </span>
                    </li>
                    <li> 
                        <VpnKeyOutlinedIcon className="icon"/>
                        <span> Logs </span>
                    </li>
                    <li> 
                        <SettingsOutlinedIcon className="icon"/>
                        <span> Setting </span>
                    </li>
            
                    <li> 
                        <AccountCircleOutlinedIcon className="icon"/>
                        <span> Profile </span>
                    </li>
                    <li> 
                        <LogoutOutlinedIcon className="icon"/>
                        <span> Logout </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
 }


export default Sidebar;