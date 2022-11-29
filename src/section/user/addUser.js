import React, {Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Form, useFormik, FormikProvider} from 'formik';

class AddUser extends Component{
    constructor(props){
        super(props);

    }


  render(){
     const {open, handleClickOpen, handleClose} = this.props;

        return (
            <div>
          
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>ADD USER</DialogTitle>
                <DialogContent>


              
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Name"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Last Name"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                       <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Image Link"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Age"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Date of Birth"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Blood Group"
                        type="email"
                        fullWidth
                        variant="standard"
                    />




                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}


export default AddUser;