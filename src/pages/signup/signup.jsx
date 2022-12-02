
import React, {Component} from "react";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    TextField

} from '@mui/material';
import {withStyles} from '@mui/styles';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Compose from 'recompose/compose';
import {withRouter } from 'react-router-dom';

const Styles = (theme)=>({
    contianer : {
        display : "flex",
        justifyContent : 'center',
        alignItems : "center" ,
        margin : "auto"
    }
})



const userRegister = gql`
mutation($fullName : String!, $email : String!, $password : String!){
    userSignUp(fullName : $fullName, email : $email, password : $password)
  }
`

class SignUP extends Component{

    constructor(props){
        super(props);

        this.state = {
            fullName : "",
            email : "",
            password : ""
        }
    }

    SubmitHandler=(e)=>{
        e.preventDefault();
        this.props.User_Registration({
            variables : this.state
        })
        
        this.props.history.push({
            pathname : '/signin'
        })
    }

    render(){
        const {classes} = this.props;

        
        return(
            <Box className= {classes.contianer} sx={{ maxWidth: 350 }}>
                <Card sx={{marginTop : "20%"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign : "center" }} color="text.secondary" gutterBottom>
                            Sign-Up 
                        </Typography>

                        <form onSubmit={this.SubmitHandler} >
                            <TextField
                                fullWidth
                                margin="dense"
                                type= "text"
                                label= "Full Name"
                                onChange={(e)=>this.setState({fullName : e.target.value})}
                            />
                             <TextField
                                fullWidth
                                margin="dense"
                                type= "text"
                                label= "Email"
                                onChange={(e)=>this.setState({email : e.target.value})}
                            />
                             <TextField
                                fullWidth
                                margin="dense"
                                type= "password"
                                label= "Password"
                                onChange={(e)=>this.setState({password : e.target.value})}
                            />

                            <Button 
                                fullWidth 
                                type ="submit"
                                sx={{marginTop : 1.5 }}
                                variant="contained"
                               
                            > Submit</Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        )
    }
}



export default Compose( 
    graphql(userRegister, {name : "User_Registration"}),
    withRouter,
    
    withStyles(Styles)) (SignUP);
