import React, {Component} from "react";
import {toast} from 'material-react-toastify';
import {withRouter } from 'react-router-dom';
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
import compose from "recompose/compose";


const Styles = (theme)=>({
    contianer : {
        display : "flex",
        justifyContent : 'center',
        alignItems : "center" ,
        margin : "auto"
    }
})

const userLogin = gql`
    mutation($email : String!, $password : String!){
        userLogin(email : $email, password : $password){
            message,
            token
        }
    }
`


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    Login(user){
        this.props.UserLogin({
            variables : user,
        }).then(res =>{
            let successRes = res.data?.userLogin?.message;
            let token = res.data?.userLogin?.token;
            localStorage.setItem('token', token)
            toast.success(successRes);
            
            setTimeout(()=>{
               window.location.replace('/users')
            }, 3000)

        }).catch(err =>{
            let errRes = err.graphQLErrors[0]?.message;
            toast.error(errRes)
        })
    }

    SubmitHandler = (e)=>{
        e.preventDefault();
        this.Login(this.state)
    }

    render(){
        const {classes} = this.props;

        return(
            <Box className= {classes.contianer} sx={{ maxWidth: 350 }}>
                <Card sx={{marginTop : "20%"}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign : "center" }} color="text.secondary" gutterBottom>
                            Sign-In 
                        </Typography>

                        <form onSubmit={this.SubmitHandler}>
                            <TextField
                                fullWidth
                                margin="dense"
                                type= "text"
                                label= "Email"
                                onChange={(e)=> this.setState({email : e.target.value})}
                            />
                             <TextField
                                fullWidth
                                margin="dense"
                                type= "text"
                                label= "Password"
                                onChange={(e)=> this.setState({password : e.target.value})}
                            />

                            <Button 
                                fullWidth 
                                type = "submit"
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



export default compose(
    graphql(userLogin, {name : "UserLogin"}),
    withRouter,
    withStyles(Styles)) (SignIn);
