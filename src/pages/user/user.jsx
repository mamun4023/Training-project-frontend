import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import UserTable from '../../components/users/table'
import {Button, Typography} from '@mui/material';
import AddUser from '../../section/user/addUser'
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
  });


class User extends Component{
    constructor(props){
        super(props)
            this.state = {
                open : false,
            }
        
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClickOpen(){
        this.setState({
            open : true
        })
    }

    handleClose(){
        this.setState({
            open : false
        })
    }


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
                        <Typography
                            sx={{
                                display : "flex",
                                justifyContent : "space-between"
                            }}
                        >
                            <h3> User List</h3>
                            <div>
                                <Button 
                                    variant='contained'
                                    onClick={this.handleClickOpen}

                                >
                                   
                                    Add User</Button>
                                </div>
                        </Typography>

                        <AddUser  
                            open = {this.state.open}
                            handleClickOpen = {this.handleClickOpen}
                            handleClose = {this.handleClose}
                        />
                        
                        <div className= {classes.listTitle}>
                            <div>
                                <UserTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(User);