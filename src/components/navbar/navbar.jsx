import React, {Component} from "react";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {DarkModeContext} from '../../contextAPI/darkMode'
import {withStyles} from '@mui/styles';
import { IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Styles = (theme)=> ({
    navbar : {
        height: "50px",
        borderBottom: "0.5px solid rgb(231, 228, 228)",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        columns: "#555"
    },
    wrapper : {
        width: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },

    items : {
        display: "flex"
    },

    item : {
        display: "flex",
        alignItems: "center",
        marginRight: "20px",
        position: "relative",
    },

    icon : {
        fontSize: "20px",
    },

    avatar : {
        height: "30px",
        width: "30px",
        borderRadius: "50%"
    },

    counter : {
        width: "15px",
        height: "15px",
        backgroundColor: "red",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        fontWeight: "bold",
        position : "absolute",
        top: "-1px",
        left: "10px"
    }
})

class Navbar extends Component{


    LogoutHadler=()=>{
        localStorage.removeItem('token');
        window.location.replace('/signin')
    }

    render (){
        const {classes} = this.props;
        return(
            <div className= {classes.navbar}>
                <div className= {classes.wrapper}>
                    <div></div>
                    <div className= {classes.items}>
                        <div className= {classes.item}>
                            <LanguageOutlinedIcon  className= {classes.icon}/>
                            English
                        </div>
                        <div className= {classes.item}>
                            <NotificationsNoneOutlinedIcon className= {classes.icon}/>
                            <div className= {classes.counter}> 5</div>
                        </div>
                        <div className= {classes.item}>
                            <ChatBubbleOutlineOutlinedIcon className= {classes.icon}/>
                            <div className= {classes.counter}>2 </div>
                        </div>
                        <DarkModeContext.Consumer>
                            {
                                ({ changer})=> {
                                    return (
                                        <div className= {classes.item}>
                                        <DarkModeIcon onClick={()=> changer()} className= {classes.icon}/>
                                    </div>
                                    )
                                }
                            }
                        </DarkModeContext.Consumer>
                       
                        <IconButton 
                            onClick={this.LogoutHadler}
                         className= {classes.item}>
                            <LogoutIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(Styles) (Navbar);