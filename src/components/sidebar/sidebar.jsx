import  React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import "./sidebar.scss";
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Products from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';

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
                        <Link to= "/users"> 
                            <li> 
                                <Person3OutlinedIcon className="icon"/>
                                <span> Users </span>
                            </li>
                        </Link>
                        <Link to="/products">
                            <li> 
                                <Products className="icon"/>
                                <span> Products </span>
                            </li>
                        </Link> 
                        <Link to="/transactions">
                            <li> 
                                <ReceiptIcon className="icon"/>
                                <span> Transaction </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
 }


export default Sidebar;