import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Product from './pages/product/product';
import User from './pages/user/user';
import Transaction from './pages/transaction/transaction'

class Routing extends Component{

    render(){
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path= "/"  component={User} />
                        <Route path= "/products"  component={Product} />
                        <Route path= "/transactions"  component={Transaction} />
                    </Switch>
                </BrowserRouter>            
            
        )
    }
}

export default Routing;