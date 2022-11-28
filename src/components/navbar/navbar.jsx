import React, {Component} from "react";
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {DarkModeContext} from '../../contextAPI/darkMode'

class Navbar extends Component{
    render (){
        return(
            <div className="navbar">
                <div className="wrapper">
                    {/* <div className="search">
                        <input type="text" placeholder="Search..."  />
                        <SearchOutlinedIcon className="search-icon"/>
                    </div> */}
                    <div></div>

                    <div className="items">
                        <div className="item">
                            <LanguageOutlinedIcon  className="icon"/>
                            English
                        </div>
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon"/>
                            <div className="counter"> 5</div>
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className="icon"/>
                            <div className="counter">2 </div>
                        </div>
                        <DarkModeContext.Consumer>
                            {
                                ({ changer})=> {
                                    return (
                                        <div className="item">
                                        <DarkModeIcon onClick={()=> changer()} className="icon"/>
                                    </div>
                                    )
                                }
                            }
                        </DarkModeContext.Consumer>
                       
                        <div className="item">
                            <img 
                                src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                                className="avatar"
                                style={{
                                    border : '1px solid gray'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;