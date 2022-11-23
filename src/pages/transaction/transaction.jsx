

import React, {Component} from 'react';
import './transaction.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import TransactonTable from '../../components/transaction/table';


class User extends Component{

    render(){
        return(
            <div className='container'>
                <div className='leftSide'>
                    <Sidebar />
                </div>
                <div className='rightSide'>
                    <Navbar/>
                    <div className="listContainer">
                        <h3> Transaction History </h3>
                        <div className="listTilt">
                            <div className="latestTransaction">
                                <TransactonTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;