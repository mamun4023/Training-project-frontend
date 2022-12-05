import React, {Component} from 'react';
import Routes from './routes';
import {DarkModeContext} from './contextAPI/darkMode'
import {withStyles} from '@mui/styles';
import { ToastContainer } from 'material-react-toastify';

const Styles = (theme)=> ({
    app : {
        backgroundColor : "#222",
        coloor : 'gray'
    }
})

class App extends Component{

    render(){
        const {classes} = this.props;
        return(
            <DarkModeContext.Consumer>
                {
                    ({darkMode}) =>{
                            return (
                                <div className= {`${darkMode?classes.app : null}`}>
                                    <ToastContainer />
                                    <Routes /> 
                                </div>
                            )
                        }
                }
               
            </DarkModeContext.Consumer>
        )
    }
}

export default withStyles(Styles) (App)