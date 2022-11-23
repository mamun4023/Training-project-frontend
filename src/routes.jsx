import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home/home';
import User from './pages/user/user';

class Routing extends Component{

    render(){
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path= "/"  component={Home} />
                        <Route path= "/user"  component={User} />

                    </Switch>
                </BrowserRouter>            
            
        )
    }
}

export default Routing;