import React, {Component} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { gql } from "apollo-boost";
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';
import {toast} from 'material-react-toastify';

const  Single_user = gql`
    query($id: ID!) {
        user(id : $id){
            firstName, lastName, lastName, image, age, birthDate, phone, email, bloodGroup
        }
    }
`;

const updateUser = gql`
    mutation($id : ID!, $firstName : String!, $lastName : String!, $image : String!, $age : String!, $email: String!, $phone : String!, $birthDate : String!, $bloodGroup : String! ){
        updateUser(
            id : $id, 
            firstName :$firstName,
            lastName : $lastName,
            image : $image,
            age : $age,
            email : $email,
            phone : $phone,
            birthDate : $birthDate,
            bloodGroup : $bloodGroup
        ){
        message
        }
    }
`

class EditUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            image : "",
            age : "",
            birthDate : "",
            phone :  "",
            email : "",
            bloodGroup : "" 
        }

        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    SubmitHandler(e){
        e.preventDefault();
        this.props.UpdateUser({
            variables : this.state
        }).then(res =>{
            let successRes = res.data.updateUser.message
            toast.success(successRes)
            this.props.handleClose();
            this.props.refresh();
        }).catch(err =>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.props.user.refetch(this.props.id)
        .then(res =>{
            let response = res.data?.user[0];
            this.setState({
                firstName : response.firstName,
                lastName : response.lastName,
                image : response.image,
                age : response.age,
                birthDate : response.birthDate,
                phone :  response.phone,
                email : response.email,
                bloodGroup : response.bloodGroup 
            })
        })
    }
   
    render(){
        const {open, handleClose} = this.props;
        
        return (
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={this.SubmitHandler} > 
                    <DialogTitle>EDIT USER</DialogTitle>
                    <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value = {this.state.firstName}
                                onChange={(e)=>this.setState({firstName : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.lastName}
                                onChange={(e)=>this.setState({lastName : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                id="name"
                                label="Image Link"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.image}
                                onChange={(e)=>this.setState({image : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Age"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.age}
                                onChange={(e)=>this.setState({age : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{shrink : true}}
                                fullWidth
                                variant="standard"
                                value={this.state.birthDate}
                                onChange={(e)=>this.setState({birthDate : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Phone"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.phone}
                                onChange={(e)=>this.setState({phone : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Email"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.email}
                                onChange={(e)=>this.setState({email : e.target.value})}
                            />
                            <TextField
                                margin="dense"
                                label="Blood Group"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={this.state.bloodGroup}
                                onChange={(e)=>this.setState({bloodGroup : e.target.value})}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' type='submit'>Save</Button>
                        <Button color='error' variant='outlined' onClick={handleClose}>Close</Button>
                    </DialogActions>
                    </form>
                </Dialog>
        );
    }
}

export default compose( 
    graphql(Single_user, {name : "user",
    options : (props)=> ({
        variables : {
            id : props.id,
        }
    })
    }),
    graphql(updateUser, {name : "UpdateUser"})
) (EditUser);