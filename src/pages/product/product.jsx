
import React, {Component} from 'react';
import Sidbar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar'
import './product.scss';
import ProductTable from '../../components/product/table';

class Home extends Component{

    render(){
        return(
            <div className='container'>
                <div className='leftSide'>
                    <Sidbar />
                </div>
                <div className='rightSide' >
                    <Navbar />
                    <div className="listContainer">
                        <h3> Product List</h3>
                        <div className="listTilt">
                            <div className="latestTransaction">
                                <ProductTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;