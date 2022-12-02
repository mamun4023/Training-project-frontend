import React, {Component} from 'react';
import HOC_Compose from 'recompose/compose';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, IconButton } from "@mui/material";
import { gql} from 'apollo-boost';
import { graphql } from 'react-apollo';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {withStyles} from '@mui/styles';

const Styles = (theme)=> ({
    

})


const UserQuery = gql`
  query ($limit : ID!, $page : ID!) {
    users(limit: $limit , page : $page) {
        id,
        firstName,
        lastName,
        image,
        age,
        birthDate,
        phone,
        email,
        bloodGroup
    }
  }`

const RemoveUser = gql`
  mutation RemoveUser ($id : ID!) {
    removeUser(id: $id) {
        message,
    }
  }`


class UserTable extends Component{
    constructor(props){
        super(props);

        this.RemoveUser = this.RemoveUser.bind(this)
        this.Refetch = this.Refetch.bind(this)
    }

    Refetch(){
        this.props.userList.refetch({
            variables : {
                limit : 10,
                page : 1
            }
        })
    }

    RemoveUser(id){
        this.props.RemoveUser({
            variables : {
                id : id
            }
        })
        console.log(this.props)
        this.Refetch();
    }


    render() {
        const {users, loading} = this.props.userList;

        if(loading){
            return <div> Loading...</div>
        }
       
        return (
            <TableContainer component={Paper} className = "table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell" align="left">First Name</TableCell>
                        <TableCell className="tableCell" align="left">Last Name</TableCell>
                        <TableCell className="tableCell" align="left">Image</TableCell>
                        <TableCell className="tableCell" align="left">Age</TableCell>
                        <TableCell className="tableCell" align="left">Date of Birth</TableCell>
                        <TableCell className="tableCell" align="left">Phone</TableCell>
                        <TableCell className="tableCell" align="left">Email</TableCell>
                        <TableCell className="tableCell" align="left">Blood Group</TableCell>
                        <TableCell className="tableCell" align="left">ACTIONS</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCell">{row.id} </TableCell>
                            <TableCell className="tableCell" align="left">{row.firstName}</TableCell>
                            <TableCell className="tableCell" align="left">{row.lastName}</TableCell>
                            <TableCell className="tableCell" align="left">
                                <Avatar src= {row.image} />
                            </TableCell>
                            <TableCell className="tableCell" align="left">{row.age}</TableCell>
                            <TableCell className="tableCell" align="left">{row.birthDate}</TableCell>
                            <TableCell className="tableCell" align="left">{row.phone}</TableCell>
                            <TableCell className="tableCell" align="left">{row.email}</TableCell>
                            <TableCell className="tableCell" align="left">{row.bloodGroup} </TableCell>
                            <TableCell className="tableCell" align="left">
                                {/* <IconButton color="success"> 
                                    <EditIcon/> 
                                </IconButton> */}
                                <IconButton onClick={()=> this.RemoveUser(row.id)} color="error"> 
                                    <DeleteIcon/> 
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default HOC_Compose(

        graphql(UserQuery, {
            name : "userList",
            options : (props)=> ({
                variables : {
                    limit : 10,
                    page : 1
                }
            })
        }), 

        graphql(
            RemoveUser, {
                name : "RemoveUser"
            }
        ),
    

 withStyles(Styles)) (UserTable);