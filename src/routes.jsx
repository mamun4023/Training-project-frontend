import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignUp from './pages/signup/signup';
import SignIn from './pages/signIn/signin';
import Product from './pages/product/product';
import Users from './pages/user/user';
import Transaction from './pages/transaction/transaction'

const token = localStorage.getItem('token');

class Routing extends Component{

    render(){
        return(
                <BrowserRouter>
                    <Switch>
                        {
                            token ? 
                                <>
                                    <Route exact path= "/users"  component={Users} />
                                    <Route path= "/products"  component={Product} />
                                    <Route path= "/transactions"  component={Transaction} />
                                </>: 
                                <>
                                    <Route  path= "/signup"  component={SignUp} />
                                    <Route  path= "/"  component={SignIn} />
                                </>
                        }
                    </Switch>
                </BrowserRouter>            
            
        )
    }
}

export default Routing;