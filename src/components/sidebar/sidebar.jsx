import  React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import Products from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {withStyles} from '@mui/styles';


const Styles = (theme)=>({
    sidebar : {
        flex: 1,
        borderRight: "0.5px solid rgb(230, 227, 227)",
        minHeight: "100vh"
    },
    top : {
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logo : {
        fontSize : "20px",
        fontWeight: "bold"   
    },
    center : {
        paddingLeft : "10px",
        
    },
    list : {
        listStyleType : "none",
        margin: 0,
        padding: 0,
    },
    link : {
        textDecoration : "none",
        color : 'black'
    },
  
    listItem :{
        display: "flex",
        alignItems : "center",
        padding : '8px',
        cursor : "pointer",
        '&:hover' : {
            backgroundColor: "#ece8ff"
        }
    },
    icon : {
        fontSize: "18px",
        color: "black"
    }
})

class Sidebar extends Component{
   render(){
        const {classes} = this.props;
        return(
            <div className= {classes.sidebar}>
                <div className= {classes.top}> 
                    <span> Logo </span>
                </div>
                <hr/>
                <div className= {classes.center}> 
                    <ul className= {classes.list}>
                        <Link className= {classes.link} to= "/users"> 
                            <li className= {classes.listItem}> 
                                <Person3OutlinedIcon className= {classes.icon}/>
                                <span className= {classes.title} > Users </span>
                            </li>
                        </Link>
                        <Link className= {classes.link} to="/products">
                            <li className= {classes.listItem} > 
                                <Products className="icon"/>
                                <span className= {classes.title} > Products </span>
                            </li>
                        </Link> 
                        <Link className= {classes.link} to="/transactions">
                            <li className= {classes.listItem}  > 
                                <ReceiptIcon className="icon"/>
                                <span className= {classes.title}> Transaction </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
 }


export default withStyles(Styles)(Sidebar);