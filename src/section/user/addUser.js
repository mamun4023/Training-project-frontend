import React, {Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo';


const  Add_User = gql`
    mutation AddUser ($firstName: String!, $lastName : String!, $image : String!, $age : String!, $gender : String! , $birthDate : String!, $phone : String!, $email : String!, $bloodGroup : String!) {
        addUser(firstName: $firstName, lastName: $lastName, image: $image,  age : $age, gender : $gender, birthDate : $birthDate, phone : $phone, email : $email, bloodGroup : $bloodGroup){
            firstName
        }
    }
`;


class AddUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName : "",
            lastName :  "",
            image : "",
            age : "",
            gender : "",
            birthDate : "",
            phone :  "",
            email : "",
            bloodGroup : "" 
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    SubmitHandler(e){
        e.preventDefault();
        this.props.AddUser({
            variables : this.state
        })
        this.props.AddUserResult.client.resetStore();
        this.props.handleClose();
    }

  render(){
     const {open, handleClickOpen, handleClose} = this.props;
        return (
            <div>
                
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={this.SubmitHandler} > 
                <DialogTitle>ADD USER</DialogTitle>
                <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({firstName : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({lastName : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Image Link"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({image : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Age"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({age : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Gender"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({gender : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Date of Birth"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({birthDate : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({phone : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({email : e.target.value})}
                        />
                        <TextField
                            margin="dense"
                            label="Blood Group"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e)=>this.setState({bloodGroup : e.target.value})}
                        />
                    
                </DialogContent>
                <DialogActions>
                    <Button type='submit'>Save</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
                </form>
            </Dialog>
            </div>
        );
    }
}


export default graphql(Add_User, {name : "AddUser"}) (AddUser);