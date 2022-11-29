import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import TransactonTable from '../../components/transaction/table';
import { withStyles } from '@mui/styles';

const styles = (theme)=> ({
    container : {
        display: "flex",
    },
    leftSide : {
        flex: "1"
    },
    rightSide : {
        flex: "5"
    },
    listContainer : {
        shadow: "2px 4px 10px 1px rgba(0,0,0,0.47)",
        boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)",
        padding: "15px",
        margin: "15px",
    },
    listTitle : {
        fontWeight: 500,
        color: "gray",
        marginBottom: "15px"
    }
})


class Transaction extends Component{

    render(){
        const {classes} = this.props;
        return(
            <div className= {classes.container}>
                <div className= {classes.leftSide}>
                    <Sidebar />
                </div>
                <div className= {classes.rightSide}>
                    <Navbar/>
                    <div className= {classes.listContainer}>
                        <h3> Transaction History </h3>
                        <div className= {classes.listTitle}>
                            <div >
                                <TransactonTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles) (Transaction);