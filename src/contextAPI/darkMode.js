import React, {Component, createContext} from "react";

export const DarkModeContext = createContext();

export class DarkModeContextProvider extends Component{
    constructor(props){
        super(props)
            this.state = {
                darkMode  : false,
            }

        this.ChangeMode = this.ChangeMode.bind(this)
    }

    ChangeMode(){
        this.setState({
            darkMode : !this.state.darkMode
        })
    }

    render(){
        return <DarkModeContext.Provider value={{darkMode : this.state.darkMode, changer : this.ChangeMode}} > {this.props.children} </DarkModeContext.Provider>
    }
}

