
import React, {Component} from 'react';
import Sidbar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar'
import './home.scss';

class Home extends Component{

    render(){
        return(
            <div className='container'>
                <div className='leftSide'>
                    <Sidbar />
                </div>
                <div className='rightSide' >
                    <Navbar />
                </div>
            </div>
        )
    }

}

export default Home;