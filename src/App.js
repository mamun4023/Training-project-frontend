import React, {Component} from 'react';
import Routes from './routes';
import "./app.scss"
import {DarkModeContext} from './contextAPI/darkMode'

class App extends Component{

    render(){
        return(

            <DarkModeContext.Consumer>
                {
                    ({darkMode}) =>{
                            return (
                                <div className= {`${darkMode?"app" : null}`}>
                                    <Routes /> 
                                </div>
                            )
                        }
                }
            </DarkModeContext.Consumer>
        )
    }
}

export default App;